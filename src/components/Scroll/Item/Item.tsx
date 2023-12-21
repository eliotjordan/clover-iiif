// @ts-nocheck

import React, { useContext, useEffect, useRef } from "react";

import { Canvas } from "@iiif/presentation-3";
import { ScrollContext } from "src/context/scroll-context";
import { styled } from "src/styles/stitches.config";
import { useIntersectionObserver } from "src/hooks/useIntersectionObserver";

interface ScrollCanvasProps {
  canvas: Canvas;
  hasPageBreak: boolean;
  isActive: boolean;
  offset: number;
  pageNumber: number;
}

const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  canvas,
  hasPageBreak,
  isActive,
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
    return pages?.items?.map((item, index) => {
      const { body } = item;
      if (body?.format === "text/html") {
        return (
          <div dangerouslySetInnerHTML={{ __html: body.value }} key={index} />
        );
      } else if (body.format === "text/plain") {
        return <PlainText key={index}>{body.value}</PlainText>;
      }
    });
  });

  return (
    <StyledItem
      data-page-break={hasPageBreak}
      data-active={isActive}
      ref={itemRef}
    >
      {pageNumber}
      {annotationBody ? annotationBody : <p>[Blank]</p>}
      {hasPageBreak && <hr data-content="Page Break" />}
    </StyledItem>
  );
};

const StyledItem = styled("article", {
  fontSize: "1.13rem !important",
  transition: "all 0.2s ease-in-out",
  display: "flex",
  flexDirection: "column",
  gap: "1.618rem",

  hr: {
    padding: "2.618rem 0",
    borderColor: "transparent",
    height: "1rem",
    position: "relative",
    zIndex: 0,
    display: "flex",
    justifyContent: "center",

    "&::before": {
      content: "attr(data-content)",
      position: "absolute",
      zIndex: 1,
      display: "flex",
      fontSize: "0.75rem",
      fontWeight: "700",
      marginTop: "-0.5rem",
      lineHeight: "1rem",
      background: "inherit",
    },

    "&::after": {
      content: "",
      width: "100%",
      position: "absolute",
      zIndex: 0,
      top: "50%",
      height: "1px",
      background: "#6661",
    },
  },
});

const PlainText = styled("div", {
  wordWrap: "break-word !important",
  whiteSpace: "pre-line !important",
});

export default ScrollCanvas;
