import React, { useContext, useRef } from "react";
import {
  StyledScrollAside,
  StyledScrollContent,
  StyledScrollFixed,
  StyledScrollSection,
} from "src/components/Scroll/Section/Section.styled";

import { ScrollContext } from "src/context/scroll-context";
import ScrollHeader from "src/components/Scroll/Section/Header";
import ScrollItem from "src/components/Scroll/Item/Item";
import ScrollPanel from "src/components/Scroll/Section/Panel";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

const ScrollSection = () => {
  const scrollCanvasRef = useRef<HTMLDivElement>(null);

  const { state } = useContext(ScrollContext);
  const { activeCanvas, manifest, options } = state;
  const { offset } = options;

  const { top } = useDistanceFromViewportTop(scrollCanvasRef);
  const width = scrollCanvasRef?.current?.offsetWidth;
  const isAnchored = top ? top < offset : false;

  if (!manifest) return null;

  return (
    <StyledScrollSection>
      <StyledScrollAside
        ref={scrollCanvasRef}
        className={isAnchored ? "anchor" : ""}
      >
        <StyledScrollFixed
          style={{
            top: isAnchored ? offset : 0,
            width,
          }}
        >
          <ScrollHeader label={manifest.label} />
          <ScrollPanel manifest={manifest} activeCanvas={activeCanvas} />
        </StyledScrollFixed>
      </StyledScrollAside>
      <StyledScrollContent>
        {manifest.items.map((canvas, index) => {
          const pageNumber = index + 1;
          const isLastItem = pageNumber === manifest?.items.length;
          return (
            <ScrollItem
              canvas={canvas}
              hasPageBreak={index + 1 < manifest?.items.length}
              isActive={activeCanvas === canvas.id}
              isLastItem={isLastItem}
              key={index}
              offset={offset}
              pageNumber={pageNumber}
            />
          );
        })}
      </StyledScrollContent>
    </StyledScrollSection>
  );
};

export default ScrollSection;
