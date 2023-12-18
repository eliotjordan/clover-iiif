import {
  Canvas,
  IIIFExternalWebResource,
  Manifest,
} from "@iiif/presentation-3";
import { Label, Summary } from "src/components/Primitives";

import ImageViewer from "src/components/Scroll/Canvas/ImageViewer";
import React from "react";
import { styled } from "src/styles/stitches.config";

interface CanvasProps {
  manifest: Manifest;
  activeCanvas?: string;
}

const ScrollCanvas: React.FC<CanvasProps> = ({ manifest, activeCanvas }) => {
  const canvas = manifest.items.find(
    (item) => item.id === activeCanvas,
  ) as Canvas;

  // @ts-ignore
  const body = canvas?.items[0].items[0].body as IIIFExternalWebResource;

  const pageNumber =
    manifest.items.findIndex((item) => item.id === activeCanvas) + 1;

  return (
    <StyledCanvas>
      {body && <ImageViewer body={body} hasPlaceholder={false} />}
      <figcaption>
        <em>
          {pageNumber} / {manifest.items.length}
        </em>
        {canvas?.label && <Label label={canvas?.label} />}
        {canvas?.summary && <Summary summary={canvas?.summary} as="p" />}
      </figcaption>
    </StyledCanvas>
  );
};

const StyledCanvas = styled("figure", {
  figcaption: {
    display: "flex",
    flexDirection: "column",
    margin: "1.618rem 0 0",
    opacity: 0.9,

    em: {
      fontSize: "0.75em",
      fontStyle: "normal",
      fontWeight: "700",
    },
  },
});

export default ScrollCanvas;
