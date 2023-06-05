import "@iiif/thumbnail-panel/dist/style.css";

import React, { useState } from "react";
import { CanvasEntity } from "@/hooks/use-iiif/getCanvasByCriteria";
import { Canvas } from "@iiif/presentation-3";
import { useViewerState, useViewerDispatch } from "@/context/viewer-context";
import { IIIFContentProvider, ThumbnailPanel } from "@iiif/thumbnail-panel";
import { ThumbnailPanelWrapper } from "./Media.styled";

interface MediaProps {
  items: Canvas[];
  activeItem: number;
}

const Media: React.FC<MediaProps> = () => {
  const dispatch: any = useViewerDispatch();
  const state: any = useViewerState();
  const { activeCanvas, activeManifest } = state;

  const scrollRef = React.useRef<HTMLDivElement>(null);

  // @ts-ignore
  const handleChange = ({ resourceIds }) => {
    if (activeCanvas !== resourceIds.current)
      dispatch({
        type: "updateActiveCanvas",
        canvasId: resourceIds.current,
      });
  };

  return (
    <ThumbnailPanelWrapper>
      <IIIFContentProvider>
        <ThumbnailPanel
          iiifContent={activeManifest}
          onResourceChanged={handleChange}
          orientation="horizontal"
        />
      </IIIFContentProvider>
    </ThumbnailPanelWrapper>
  );
};

export default Media;
