import React, { useContext, useRef } from "react";
import {
  StyledScrollAside,
  StyledScrollContent,
  StyledScrollFixed,
  StyledScrollSection,
} from "./Section.styled";

import { ScrollContext } from "src/context/scroll-context";
import ScrollHeader from "./Header";
import ScrollItem from "../Item/Item";
import ScrollPanel from "./Panel";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

const ScrollSection: React.FC = () => {
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
          return (
            <ScrollItem
              canvas={canvas}
              hasPageBreak={index + 1 < manifest?.items.length}
              isActive={activeCanvas === canvas.id}
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
