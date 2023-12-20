import React, { useContext, useEffect, useRef, useState } from "react";

import Header from "../Header/Header";
import Panel from "../Panel/Panel";
import { ScrollContext } from "src/context/scroll-context";
import ScrollItem from "../Item/Item";
import { styled } from "@stitches/react";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

const CloverScrollSection: React.FC = () => {
  const [activeCanvas, setActiveCanvas] = useState<string | undefined>();
  const [index, setIndex] = useState<string | undefined>();
  const scrollCanvasRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

  const { state } = useContext(ScrollContext);
  const { manifest, options } = state;
  const { offset } = options;

  const { top } = useDistanceFromViewportTop(scrollCanvasRef);
  const isAnchored = top ? top < offset : false;
  const width = widthRef?.current?.offsetWidth;

  useEffect(() => {
    if (!index) return;
    const firstItem = Object.keys(index).find((key) => index[key] === true);
    setActiveCanvas(firstItem);
  }, [index]);

  const handleIntersecting = (data) => {
    // @ts-ignore
    setIndex((prev) => ({ ...prev, ...data }));
  };

  if (!manifest) return null;

  return (
    <StyledWrapper>
      <StyledScrollFixed
        ref={scrollCanvasRef}
        className={isAnchored ? "anchor" : ""}
      >
        <div
          data-type="wrapper"
          style={{
            top: isAnchored ? offset : 0,
            width,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Header label={manifest.label} />
          <Panel manifest={manifest} activeCanvas={activeCanvas} />
        </div>
        <Width ref={widthRef} />
      </StyledScrollFixed>
      <StyledScrollContent>
        {manifest.items.map((canvas, index) => {
          const pageNumber = index + 1;
          return (
            <ScrollItem
              canvas={canvas}
              hasPageBreak={index + 1 < manifest?.items.length}
              isActive={activeCanvas === canvas.id}
              isIntersecting={handleIntersecting}
              key={index}
              offset={offset}
              pageNumber={pageNumber}
            />
          );
        })}
      </StyledScrollContent>
    </StyledWrapper>
  );
};

const StyledScrollContent = styled("div", {
  width: "61.8%",
  position: "relative",
  zIndex: "1",
});

const StyledWrapper = styled("div", {
  display: "flex",
  margin: "0",
  gap: "2.618rem",
});

const StyledScrollFixed = styled("div", {
  margin: "0",
  padding: "0",
  position: "relative",
  zIndex: 2,
  minWidth: "273px",
  flexGrow: "1",
  flexShrink: "0",

  "div[data-type=wrapper]": {
    position: "absolute",
    width: "100%",
    top: 0,
  },

  "&.anchor": {
    "div[data-type=wrapper]": {
      position: "fixed",
      width: "100%",
    },
  },
});

const Width = styled("div", {
  background: "transparent",
  height: "1px",
  position: "absolute",
  width: "100%",
  zIndex: 0,
});

export default CloverScrollSection;
