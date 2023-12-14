import React, { useEffect, useState } from "react";

import { Manifest } from "@iiif/presentation-3";
import ScrollCanvas from "./Canvas/Canvas";
import ScrollItem from "./Item/Item";
import { styled } from "@stitches/react";

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
          }, {})
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
      <ScrollCanvas
        manifest={manifest}
        activeCanvas={activeCanvas}
        offset={offset}
      />
      <StyledScrollContent>
        {manifest.items.map((canvas, key) => {
          return (
            <ScrollItem
              canvas={canvas}
              isActive={activeCanvas === canvas.id}
              isIntersecting={handleIntersecting}
              hasPageBreak={key + 1 < manifest?.items.length}
              offset={offset}
            />
          );
        })}
      </StyledScrollContent>
    </StyledScroll>
  );
};

const StyledScrollContent = styled("div", {
  width: "50%",
  position: "relative",
  zIndex: "1",
});

const StyledScroll = styled("div", {
  display: "flex",
  margin: "0",
  gap: "2rem",
});

export default CloverScroll;
