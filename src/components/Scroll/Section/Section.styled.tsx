import { styled } from "src/styles/stitches.config";

const StyledScrollContent = styled("div", {
  position: "relative",
  zIndex: "1",
  paddingTop: "3.618rem",
});

const StyledScrollFixed = styled("div", {
  display: "flex",
  gap: "1rem",
  justifyContent: "space-between",
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
    width: "38.2%",
    top: 0,
  },

  "&.anchor": {
    [`& ${StyledScrollFixed}`]: {
      position: "fixed",
      width: "38.2%",
    },
  },
});

const StyledScrollHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1",
  flexGrow: "1",
  flexShrink: "0",

  strong: {
    fontSize: "2rem",
  },
});

const StyledScrollSection = styled("section", {
  margin: "0",
  gap: "1rem",
  overflow: "hidden",
});

export {
  StyledScrollAside,
  StyledScrollContent,
  StyledScrollFixed,
  StyledScrollHeader,
  StyledScrollSection,
};
