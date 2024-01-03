// @ts-nocheck

import React, { useContext, useEffect, useRef } from "react";

import { Canvas } from "@iiif/presentation-3";
import { ScrollContext } from "src/context/scroll-context";
import ScrollItemBody from "./Body";
import { styled } from "src/styles/stitches.config";
import { useIntersectionObserver } from "src/hooks/useIntersectionObserver";

interface ScrollItemProps {
  canvas: Canvas;
  hasPageBreak: boolean;
  isActive: boolean;
  isLastItem: boolean;
  offset: number;
  pageNumber: number;
}

const ScrollItem: React.FC<ScrollItemProps> = ({
  canvas,
  hasPageBreak,
  isActive,
  isLastItem,
  offset,
  pageNumber,
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const { dispatch, state } = useContext(ScrollContext);
  const { activeCanvas, isIntersecting } = state;

  const entry = useIntersectionObserver(itemRef, {
    rootMargin: `-${offset}px 0px 0px 0px`,
  });
  const isVisible = !!entry?.isIntersecting;

  const boundingClientRect = itemRef?.current?.getBoundingClientRect();

  const marginBottom = isLastItem ? boundingClientRect?.height : 0;

  useEffect(() => {
    let updateIsIntersecting = isIntersecting;

    if (isVisible) {
      updateIsIntersecting = updateIsIntersecting?.concat(canvas.id);
    } else {
      updateIsIntersecting = updateIsIntersecting?.filter(
        (id) => id !== canvas.id,
      );
    }

    dispatch({
      payload: updateIsIntersecting,
      type: "updateIsIntersecting",
    });
  }, [isVisible]);

  useEffect(() => {
    if (activeCanvas === canvas.id) {
      const calculateVisibility = () => {
        const { top, height } = boundingClientRect;

        let visibleHeight;
        let visibility = 100;

        if (top < 0 && top + height > 0) {
          visibleHeight = top + height - offset;
          visibility = Math.max(
            0,
            Math.min(100, (visibleHeight / (height - offset)) * 100),
          );
        }

        dispatch({
          payload: 100 - visibility,
          type: "updateActiveCompletionPercent",
        });
      };

      calculateVisibility();
    }
  }, [activeCanvas, boundingClientRect?.top]);

  const { annotations } = canvas;

  const annotationBody = annotations?.map((pages) => {
    return pages?.items?.map((item, index) => (
      <ScrollItemBody item={item} key={index} />
    ));
  });

  return (
    <>
      <StyledItem
        data-active={isActive}
        data-page-break={hasPageBreak}
        data-page-number={pageNumber}
        data-last-item={isLastItem}
        ref={itemRef}
        style={{ marginBottom }}
      >
        {annotationBody ? annotationBody : <p>[Blank]</p>}
      </StyledItem>
      {hasPageBreak && <PageBreak data-content="Page Break" />}
    </>
  );
};

const StyledItem = styled("article", {
  fontSize: "1.13rem !important",
  transition: "all 0.382s ease-in-out",
  display: "flex",
  flexDirection: "column",
});

const PageBreak = styled("hr", {
  margin: "0",
  borderColor: "transparent",
  height: "1rem",
  position: "relative",
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  marginTop: "1.618rem",

  "&::before": {
    content: "attr(data-content)",
    position: "absolute",
    zIndex: 1,
    display: "flex",
    fontSize: "0.75rem",
    fontWeight: "700",
    lineHeight: "1rem",
    background: "inherit",
  },

  "&::after": {
    content: "",
    width: "100%",
    position: "absolute",
    zIndex: 0,
    top: "50%",
    height: "2px",
    background: "#6661",
  },
});

export default ScrollItem;
