import { styled } from "@stitches/react";

const StyledScrollContent = styled("div", {
  width: "61.8%",
  position: "relative",
  zIndex: "1",
});

const StyledScrollFixed = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const StyledScrollAside = styled("div", {
  margin: "0",
  padding: "0",
  position: "relative",
  zIndex: 2,
  minWidth: "273px",
  flexGrow: "1",
  flexShrink: "0",

  [`& ${StyledScrollFixed}`]: {
    position: "absolute",
    width: "100%",
    top: 0,
  },

  "&.anchor": {
    [`& ${StyledScrollFixed}`]: {
      position: "fixed",
      width: "100%",
    },
  },
});

const StyledScrollHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1",

  strong: {
    fontSize: "1.25rem",
  },
});

const StyledScrollSection = styled("section", {
  display: "flex",
  margin: "0",
  gap: "1.618rem",
  overflow: "hidden",
});

export {
  StyledScrollAside,
  StyledScrollContent,
  StyledScrollFixed,
  StyledScrollHeader,
  StyledScrollSection,
};
