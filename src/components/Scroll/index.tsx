import React, { useEffect, useRef, useState } from "react";

import Header from "./Header/Header";
import { Manifest } from "@iiif/presentation-3";
import ScrollCanvas from "./Canvas/Canvas";
import ScrollItem from "./Item/Item";
import { styled } from "@stitches/react";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

export interface CloverScrollProps {
  iiifContent: string;
  offset?: number;
}

const CloverScroll: React.FC<CloverScrollProps> = ({
  iiifContent,
  offset = 0,
}) => {
  const [activeCanvas, setActiveCanvas] = useState<string | undefined>();
  const [index, setIndex] = useState<string | undefined>();
  const [manifest, setManifest] = useState<Manifest>();
  const scrollCanvasRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

  const { top } = useDistanceFromViewportTop(scrollCanvasRef);
  const isAnchored = top ? top < offset : false;
  const width = widthRef?.current?.offsetWidth;

  useEffect(() => {
    (async () => {
      const manifest = await fetch(iiifContent);
      const manifestJson = await manifest.json();
      setManifest(manifestJson);
      setIndex(
        manifestJson.items
          .map((item) => item.id)
          .reduce((acc, url) => {
            acc[url] = false;
            return acc;
          }, {}),
      );
    })();
  }, [iiifContent]);

  useEffect(() => {
    if (!index) return;
    const firstItem = Object.keys(index).find((key) => index[key] === true);
    setActiveCanvas(firstItem);
  }, [index]);

  if (!manifest) return <></>;

  const handleIntersecting = (data) => {
    // @ts-ignore
    setIndex((prev) => ({ ...prev, ...data }));
  };

  return (
    <StyledScroll>
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
            }}
          >
            <Header label={manifest.label} width={width} />
            <ScrollCanvas manifest={manifest} activeCanvas={activeCanvas} />
          </div>
          <Width ref={widthRef} />
        </StyledScrollFixed>
        <StyledScrollContent
          style={{
            maskImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) calc(100% - ${
              (top - offset - 61.8) * -1
            }px), transparent calc(100% - calc(${
              (top - offset) * -1
            }px - 1.618rem))`,
          }}
        >
          {manifest.items.map((canvas, key) => {
            return (
              <ScrollItem
                canvas={canvas}
                isActive={activeCanvas === canvas.id}
                isIntersecting={handleIntersecting}
                hasPageBreak={key + 1 < manifest?.items.length}
                offset={offset}
                key={key}
              />
            );
          })}
        </StyledScrollContent>
      </StyledWrapper>
    </StyledScroll>
  );
};

const StyledScrollContent = styled("div", {
  width: "50%",
  position: "relative",
  zIndex: "1",
  marginTop: "3.618rem",
});

const StyledScroll = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  gap: "1rem",
});

const StyledWrapper = styled("div", {
  display: "flex",
  margin: "0",
  gap: "1.618rem",
});

const StyledScrollFixed = styled("div", {
  flexGrow: 1,
  margin: "0",
  padding: "0",
  position: "relative",
  zIndex: 2,

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

export default CloverScroll;
