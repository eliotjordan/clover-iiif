import * as Collapsible from "@radix-ui/react-collapsible";

import { styled } from "src/styles/stitches.config";

const MediaWrapper = styled("div", {
  position: "relative",
  zIndex: "0",
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",

  "@sm": {
    flexDirection: "column",
  },
});

const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
  flexShrink: "1",
  width: "61.8%",

  "@sm": {
    width: "100%",
  },
});

const CollapsibleTrigger = styled(Collapsible.Trigger, {
  display: "none",
  border: "none",
  padding: "0",
  transition: "$all",
  opacity: "1",
  background: "#6663",
  margin: "1rem 0",
  borderRadius: "6px",

  "&[data-information-panel='false']": {
    opacity: "0",
    marginTop: "-59px",
  },

  "@sm": {
    display: "flex",

    "> span": {
      display: "flex",
      flexGrow: "1",
      fontSize: "0.8333em",
      justifyContent: "center",
      padding: "0.5rem",
      fontFamily: "inherit",
    },
  },
});

const CollapsibleContent = styled(Collapsible.Content, {
  display: "flex",

  "&[data-state=open]": {
    width: "38.2%",
  },
});

const Aside = styled("aside", {
  display: "flex",
  flexGrow: "0",
  flexShrink: "0",
  maxHeight: "100%",

  "@sm": {
    width: "100%",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  fontSmooth: "auto",
  webkitFontSmoothing: "antialiased",

  "> div": {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "flex-start",

    "@sm": {
      [`& ${Content}`]: {
        flexGrow: "1",
      },

      [`& ${Main}`]: {
        flexGrow: "0",
      },
    },
  },

  "@sm": {
    padding: "0",
  },

  "&[data-information-panel-open='true']": {
    "@sm": {
      position: "fixed",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      zIndex: "2500000000",

      [`& ${MediaWrapper}`]: {
        display: "none",
      },

      [`& ${CollapsibleTrigger}`]: {
        margin: "1rem",
      },

      [`& ${CollapsibleContent}`]: {
        height: "100%",
      },
    },
  },
});

export {
  Wrapper,
  Content,
  Main,
  MediaWrapper,
  CollapsibleContent,
  CollapsibleTrigger,
  Aside,
};
