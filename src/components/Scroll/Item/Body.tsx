import React, { useContext, useEffect, useRef, useState } from "react";

import { ScrollContext } from "src/context/scroll-context";
import { styled } from "src/styles/stitches.config";

const ScrollItemBody = ({ item }) => {
  const [value, setValue] = useState<string>("");

  const bodyRef = useRef<HTMLDivElement>(null);

  const { state } = useContext(ScrollContext);
  const { scrollToCanvas, searchString } = state;

  const { body } = item;

  useEffect(() => {
    if (scrollToCanvas === item.id) {
      bodyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [scrollToCanvas, item.id]);

  useEffect(() => {
    let value = body?.value;

    if (body?.format === "text/plain") {
      const regex = /\n/g;
      const newLineToBreak = "<br />";
      value = value?.replace(regex, newLineToBreak);
    }

    // search the value for the search string and wrap the matches in a span
    if (searchString) {
      const regex = new RegExp(searchString, "gi");
      value = value?.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });
    }

    setValue(value);
  }, [body, searchString]);

  if (!value) return null;

  return (
    <TextualBody dangerouslySetInnerHTML={{ __html: value }} ref={bodyRef} />
  );
};

const TextualBody = styled("div", {
  paddingTop: "1.618rem",

  "span.highlight": {
    position: "relative",
    color: "$accentAlt",

    "&::before": {
      top: "0",
      position: "absolute",
      display: "inline",
      content: "",
      width: "calc(100% + 4px)",
      height: "calc(100% + 2px)",
      marginLeft: "-2px",
      marginTop: "-1px",
      borderRadius: "3px",
      borderBottom: "$accent 1px solid",
      opacity: 0.2,
    },

    "&::after": {
      left: "0",
      top: "0",
      position: "absolute",
      display: "inline",
      content: "",
      width: "calc(100% + 4px)",
      height: "calc(100% + 2px)",
      marginLeft: "-2px",
      marginTop: "-1px",
      borderRadius: "3px",
      backgroundColor: "$accent",
      zIndex: -1,
      opacity: 0.2,
    },
  },
});

export default ScrollItemBody;
