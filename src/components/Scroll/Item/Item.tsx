// @ts-nocheck

import React, { useEffect, useRef } from "react";

import { Canvas } from "@iiif/presentation-3";
import { styled } from "src/styles/stitches.config";
import { useIntersectionObserver } from "src/hooks/useIntersectionObserver";

interface ScrollCanvasProps {
  canvas: Canvas;
  hasPageBreak: boolean;
  isActive: boolean;
  isIntersecting: (data: string) => void;
  offset: number;
}

const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  canvas,
  hasPageBreak,
  isActive,
  isIntersecting,
  offset,
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(itemRef, {
    rootMargin: `-${offset}px 0px 0px 0px`,
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    isIntersecting({ [canvas.id]: isVisible });
  }, [isVisible]);

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
