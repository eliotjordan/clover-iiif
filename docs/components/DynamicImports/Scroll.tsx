import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// todo: set this as a constant somewhere?
const defaultIiifContent =
  "https://raw.githubusercontent.com/mathewjordan/iiif/main/manifest/tsg/commenting.json";

const Scroll = dynamic(() => import("src/components/Scroll"), {
  ssr: false,
});

const CloverScroll = ({
  iiifContent = defaultIiifContent,
}: {
  iiifContent: string;
}) => {
  const [iiifResource, setIiifResource] = useState<string>();

  const router = useRouter();
  const { "iiif-content": iiifContentParam } = router.query;

  useEffect(() => {
    iiifResource
      ? setIiifResource(iiifContentParam as string)
      : setIiifResource(iiifContent);
  }, [iiifContentParam]);

  if (!iiifResource) return <></>;

  return <Scroll iiifContent={iiifResource} offset={100} />;
};

export default CloverScroll;
