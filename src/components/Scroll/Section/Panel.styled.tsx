import * as Tabs from "@radix-ui/react-tabs";

import { styled } from "src/styles/stitches.config";

const StyledPanel = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
  flexShrink: "0",
  position: "relative",
  zIndex: "1",
  width: "100%",
});

const StyledPanelTabs = styled(Tabs.List, {
  display: "flex",
  flexGrow: "0",
});

const StyledPanelTab = styled(Tabs.Trigger, {
  display: "flex",
  position: "relative",
  padding: "0.5rem 0.618rem",
  background: "none",
  backgroundColor: "#6660",
  fontFamily: "inherit",
  border: "none",
  opacity: "0.7",
  fontSize: "0.9rem",
  lineHeight: "1rem",
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: "$all",
  borderRadius: "6px",

  "&::after": {
    width: "0",
    height: "4px",
    content: "",
    position: "absolute",
    bottom: "-4px",
    left: "0",
    transition: "$all",
  },

  "&[data-state='active']": {
    opacity: "1",
    fontWeight: 700,
    color: "$accent",

    "&::after": {
      width: "100%",
      backgroundColor: "$accent",
    },
  },
});

const StyledPanelContent = styled(Tabs.Content, {});

export { StyledPanel, StyledPanelContent, StyledPanelTab, StyledPanelTabs };
