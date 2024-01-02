import React, { useContext, useEffect, useRef } from "react";

import { ScrollContext } from "src/context/scroll-context";
import { styled } from "src/styles/stitches.config";

const ScrollItemBody = ({ item }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { state } = useContext(ScrollContext);
  const { scrollToCanvas } = state;

  useEffect(() => {
    if (scrollToCanvas === item.id) {
      bodyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [scrollToCanvas, item.id]);

  const { body } = item;
  if (body?.format === "text/html") {
    return <div dangerouslySetInnerHTML={{ __html: body.value }} />;
  } else if (body.format === "text/plain") {
    return <PlainText ref={bodyRef}>{body.value}</PlainText>;
  }
};

const PlainText = styled("div", {
  wordWrap: "break-word !important",
  whiteSpace: "pre-line !important",
});

export default ScrollItemBody;
