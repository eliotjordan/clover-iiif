// @ts-nocheck

import { Canvas, Manifest } from "@iiif/presentation-3";
import React, { useEffect, useRef } from "react";

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

  const annnotationMarkup = annotations?.map((pages) => {
    return pages?.items?.map((item) => {
      const { body } = item;
      if (body?.format === "text/html") {
        return <div dangerouslySetInnerHTML={{ __html: body.value }} />;
      } else if (body.format === "text/plain") {
        return <div>{body.value}</div>;
      }
    });
  });

  return (
    <StyledItem
      data-page-break={hasPageBreak}
      data-active={isActive}
      ref={itemRef}
    >
      {annnotationMarkup ? annnotationMarkup : <p>[Blank]</p>}
      {hasPageBreak && <hr data-content="Page Break" />}
    </StyledItem>
  );
};

const StyledItem = styled("article", {
  fontSize: "1.13rem !important",
  transition: "all 0.2s ease-in-out",

  hr: {
    padding: "2rem 0",
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
      fontSize: "0.8rem",
      lineHeight: "1rem",
      background: "inherit",
      fontStyle: "italic",
    },

    "&::after": {
      content: "",
      width: "100%",
      position: "absolute",
      zIndex: 0,
      top: "calc(50% + 1px)",
      height: "1px",
      background: "#6662",
    },
  },
});

export default ScrollCanvas;
