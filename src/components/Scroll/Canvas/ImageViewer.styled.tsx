import { styled } from "src/styles/stitches.config";

const Viewport = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: "0",
});

const Wrapper = styled("div", {
  width: "100%",
  maxHeight: "400px",
  background: "black",
  backgroundSize: "contain",
  color: "white",
  position: "relative",
  zIndex: "1",
  overflow: "hidden",
});

export { Viewport, Wrapper };
