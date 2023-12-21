import {
  Canvas,
  IIIFExternalWebResource,
  Manifest,
} from "@iiif/presentation-3";
import { Label, Summary } from "src/components/Primitives";
import React, { useContext } from "react";

import ImageViewer from "src/components/Scroll/Canvas/ImageViewer";
import { ScrollContext } from "src/context/scroll-context";
import { styled } from "src/styles/stitches.config";

interface CanvasProps {
  manifest: Manifest;
  activeCanvas?: string;
}

const ScrollCanvas: React.FC<CanvasProps> = ({ manifest, activeCanvas }) => {
  const { state } = useContext(ScrollContext);
  const { activeCompletionPercent } = state;

  const canvas = manifest.items.find(
    (item) => item.id === activeCanvas,
  ) as Canvas;

  // @ts-ignore
  const body = canvas?.items[0].items[0].body as IIIFExternalWebResource;

  const pageNumber =
    manifest.items.findIndex((item) => item.id === activeCanvas) + 1;

  return (
    <StyledCanvas>
      {body && <ImageViewer body={body} />}
      <StyledCompletionBar>
        <StyledCompletionBarProgress
          css={{
            width: `${activeCompletionPercent}%`,
          }}
        />
      </StyledCompletionBar>
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
      fontSize: "0.9em",
      fontStyle: "normal",
      opacity: 0.7,
    },
  },
});

const StyledCompletionBar = styled("div", {
  width: "100%",
  height: "6px",
  background: "#6663",
});

const StyledCompletionBarProgress = styled("div", {
  width: "0",
  height: "100%",
  background: "$accent",
});

export default ScrollCanvas;
