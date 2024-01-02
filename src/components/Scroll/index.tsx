import { Annotation, Manifest } from "@iiif/presentation-3";
import React, { useEffect, useState } from "react";

import { ScrollProvider } from "src/context/scroll-context";
import ScrollSection from "src/components/Scroll/Section/Section";

export interface CloverScrollProps {
  iiifContent: string;
  options;
}

const CloverScroll: React.FC<CloverScrollProps> = ({
  iiifContent,
  options,
}) => {
  const [manifest, setManifest] = useState<Manifest>();
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  useEffect(() => {
    (async () => {
      const manifest = await fetch(iiifContent);
      const manifestJson = await manifest?.json();

      const manifestAnnotations: Annotation[] = [];

      manifestJson?.items?.forEach((canvas) => {
        canvas?.annotations?.forEach((annotations) => {
          annotations?.items?.forEach((annotation) => {
            manifestAnnotations.push(annotation);
          });
        });
      });

      setManifest(manifestJson);
      setAnnotations(manifestAnnotations);
    })();
  }, [iiifContent]);

  return (
    <ScrollProvider
      annotations={annotations}
      manifest={manifest}
      options={options}
    >
      <ScrollSection />
    </ScrollProvider>
  );
};

export default CloverScroll;
