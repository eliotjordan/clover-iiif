import React, { useEffect, useState } from "react";

import { Manifest } from "@iiif/presentation-3";
import { ScrollProvider } from "src/context/scroll-context";
import ScrollSection from "./Section/Section";

export interface CloverScrollProps {
  iiifContent: string;
  options;
}

const CloverScroll: React.FC<CloverScrollProps> = ({
  iiifContent,
  options,
}) => {
  const [manifest, setManifest] = useState<Manifest>();

  useEffect(() => {
    (async () => {
      const manifest = await fetch(iiifContent);
      const manifestJson = await manifest.json();
      setManifest(manifestJson);
    })();
  }, [iiifContent]);

  return (
    <ScrollProvider manifest={manifest} options={options}>
      <ScrollSection />
    </ScrollProvider>
  );
};

export default CloverScroll;
