import OpenSeadragon, { Options } from "openseadragon";
import React, { useEffect, useState } from "react";
import {
  Viewport,
  Wrapper,
} from "src/components/Scroll/Canvas/ImageViewer.styled";

import Controls from "src/components/Viewer/ImageViewer/Controls";
import { getInfoResponse } from "src/lib/iiif";
import { useViewerState } from "src/context/viewer-context";
import { v4 as uuidv4 } from "uuid";

export type osdImageTypes = "tiledImage" | "simpleImage" | undefined;

interface OSDProps {
  uri: string | undefined;
  imageType: osdImageTypes;
}

const OSD: React.FC<OSDProps> = ({ uri, imageType }) => {
  const [osdUri, setOsdUri] = useState<string>();
  const viewerState: any = useViewerState();
  const { configOptions } = viewerState;

  const instance = uuidv4();

  const config: Options = {
    id: `openseadragon-viewport`,
    loadTilesWithAjax: true,
    fullPageButton: "fullPage",
    homeButton: "reset",
    rotateLeftButton: "rotateLeft",
    rotateRightButton: "rotateRight",
    zoomInButton: "zoomIn",
    zoomOutButton: "zoomOut",
    showNavigator: false,
    showFullPageControl: true,
    showHomeControl: true,
    showRotationControl: true,
    showZoomControl: true,
    navigatorBorderColor: "transparent",
    navigatorId: `openseadragon-navigator-${instance}`,
    gestureSettingsMouse: {
      clickToZoom: true,
      dblClickToZoom: true,
      pinchToZoom: true,
      scrollToZoom: false,
    },
    ...configOptions.openSeadragon,
    ajaxWithCredentials: configOptions.withCredentials,
  };

  useEffect(() => {
    if (uri !== osdUri) setOsdUri(uri);
  }, []);

  useEffect(() => {
    if (osdUri) {
      switch (imageType) {
        case "simpleImage":
          OpenSeadragon(config).addSimpleImage({
            url: osdUri,
          });
          break;
        case "tiledImage":
          getInfoResponse(osdUri).then((tileSource) =>
            OpenSeadragon(config).addTiledImage({
              tileSource: tileSource,
            }),
          );
          break;
        default:
          console.warn(
            `Unable to render ${osdUri} in OpenSeadragon as type: "${imageType}"`,
          );
          break;
      }
    }
  }, [osdUri]);

  return (
    <Wrapper
      css={{
        backgroundColor: "#6662",
        height: configOptions.canvasHeight,
      }}
    >
      <Controls options={config} hasPlaceholder={false} />
      <Viewport id={`openseadragon-viewport`} />
    </Wrapper>
  );
};

export default OSD;
