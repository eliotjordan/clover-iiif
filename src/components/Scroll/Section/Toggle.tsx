import React, { useContext, useRef } from "react";
import { StyledScrollAside, StyledScrollFixed } from "./Section.styled";

import { ScrollContext } from "src/context/scroll-context";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

const ScrollToggle: React.FC = () => {
  const scrollCanvasRef = useRef<HTMLDivElement>(null);

  const { state } = useContext(ScrollContext);
  const { options } = state;
  const { offset } = options;

  const { top } = useDistanceFromViewportTop(scrollCanvasRef);
  const width = scrollCanvasRef?.current?.offsetWidth;
  const isAnchored = top ? top < offset : false;

  return (
    <StyledScrollAside
      ref={scrollCanvasRef}
      className={isAnchored ? "anchor" : ""}
    >
      <StyledScrollFixed
        style={{
          top: isAnchored ? offset : 0,
          width: width ? width * 0.382 : width,
        }}
      >
        <button style={{ background: "gray" }}>toggle</button>
        {/* <ScrollPanel manifest={manifest} activeCanvas={activeCanvas} /> */}
      </StyledScrollFixed>
    </StyledScrollAside>
  );
};

export default ScrollToggle;
