import * as Tabs from "@radix-ui/react-tabs";

import { styled } from "src/styles/stitches.config";

const Wrapper = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  flexGrow: "1",
  flexShrink: "0",
  position: "relative",
  zIndex: "1",
});

const List = styled(Tabs.List, {
  display: "flex",
  flexGrow: "0",
  borderBottom: "2px solid #6662",
});

const Trigger = styled(Tabs.Trigger, {
  display: "flex",
  position: "relative",
  padding: "0.5rem 1rem",
  background: "none",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  border: "none",
  opacity: "0.7",
  fontSize: "0.9rem",
  lineHeight: "1rem",
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: "$all",

  "&::after": {
    width: "0",
    height: "2px",
    content: "",
    position: "absolute",
    bottom: "-2px",
    left: "0",
    transition: "$all",
  },

  "&[data-state='active']": {
    opacity: "1",
    color: "$accent",

    "&::after": {
      width: "100%",
      backgroundColor: "$accent",
    },
  },
});

const Content = styled(Tabs.Content, {});

export { Content, List, Trigger, Wrapper };
