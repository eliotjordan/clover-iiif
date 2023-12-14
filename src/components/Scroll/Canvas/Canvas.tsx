import {
  Canvas,
  IIIFExternalWebResource,
  Manifest,
} from "@iiif/presentation-3";
import { Label, Summary } from "src/components/Primitives";
import React, { useRef } from "react";

import ImageViewer from "src/components/Scroll/Canvas/ImageViewer";
import { styled } from "src/styles/stitches.config";
import { useDistanceFromViewportTop } from "src/hooks/useDistanceFromViewportTop";

interface CanvasProps {
  manifest: Manifest;
  activeCanvas?: string;
  offset: number;
}

const ScrollCanvas: React.FC<CanvasProps> = ({
  manifest,
  activeCanvas,
  offset,
}) => {
  const scrollCanvasRef = useRef<HTMLElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

  const { top } = useDistanceFromViewportTop(scrollCanvasRef);

  const canvas = manifest.items.find(
    (item) => item.id === activeCanvas
  ) as Canvas;

  // @ts-ignore
  const body = canvas?.items[0].items[0].body as IIIFExternalWebResource;

  const pageNumber =
    manifest.items.findIndex((item) => item.id === activeCanvas) + 1;

  const isAnchored = top <= offset;

  return (
    <StyledCanvas ref={scrollCanvasRef} className={isAnchored ? "anchor" : ""}>
      <div
        data-type="wrapper"
        style={{
          maxWidth: widthRef.current?.clientWidth,
          top: isAnchored ? offset : 0,
        }}
      >
        {body && <ImageViewer body={body} hasPlaceholder={false} />}
        <figcaption>
          <em>
            {pageNumber} of {manifest.items.length}
          </em>
          {canvas?.label && <Label label={canvas?.label} />}
          {canvas?.summary && <Summary summary={canvas?.summary} as="p" />}
        </figcaption>
      </div>
      <Width ref={widthRef} />
    </StyledCanvas>
  );
};

const Width = styled("div", {
  background: "transparent",
  height: "1px",
  position: "absolute",
  width: "100%",
  zIndex: 0,
});

const StyledCanvas = styled("figure", {
  flexGrow: 1,
  margin: "0",
  padding: "0",
  position: "relative",
  zIndex: 1,

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

  figcaption: {
    display: "flex",
    flexDirection: "column",
    margin: "0.5rem 0 0",
    fontSize: "0.85em",
    opacity: 0.9,

    em: {
      opacity: 0.5,
      fontSize: "0.85em",
      letterSpacing: "-0.03em",
    },
  },
});

export default ScrollCanvas;
