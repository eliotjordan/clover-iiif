// @ts-nocheck

import React, { useContext, useEffect, useRef } from "react";

import { Canvas } from "@iiif/presentation-3";
import ScrollCanvas from "../Canvas/Canvas";
import { ScrollContext } from "src/context/scroll-context";
import ScrollItemBody from "./Body";
import { styled } from "src/styles/stitches.config";

interface ScrollItemProps {
  canvas: Canvas;
  hasPageBreak: boolean;
  isActive: boolean;
  isLastItem: boolean;
  pageNumber: number;
}

const ScrollItem: React.FC<ScrollItemProps> = ({
  canvas,
  hasPageBreak,
  isActive,
  isLastItem,
  pageNumber,
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const { state } = useContext(ScrollContext);
  const { activeCanvas, manifest } = state;

  useEffect(() => {}, [activeCanvas]);

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
      >
        <StyledItemCanvas>
          <ScrollCanvas activeCanvas={canvas.id} manifest={manifest} />
        </StyledItemCanvas>
        <StyledItemTextualBodies>
          {annotationBody ? annotationBody : <p>[Blank]</p>}
        </StyledItemTextualBodies>
      </StyledItem>
      {hasPageBreak && <PageBreak data-content="Page Break" />}
    </>
  );
};

const StyledItem = styled("article", {
  transition: "all 0.382s ease-in-out",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  gap: "2.618rem",
  padding: "1.618rem 0",
});

const StyledItemCanvas = styled("div", {
  width: "38.2%",
});

const StyledItemTextualBodies = styled("div", {
  width: "61.8%",
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
    fontSize: "0.9rem",
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
