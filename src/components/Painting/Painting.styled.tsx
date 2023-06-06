import { styled } from "@/stitches";
import { ToggleStyled } from "@/components/Painting/Toggle.styled";
import { PlaceholderStyled } from "./Placeholder.styled";

const PaintingStyled = styled("div", {
  position: "relative",

  "&:hover": {
    [`${ToggleStyled}`]: {
      backgroundColor: "$accent",
    },

    [`${PlaceholderStyled}`]: {
      backgroundColor: "$secondaryAlt",

      img: {
        filter: "brightness(0.85)",
      },
    },
  },

  "#pan-zoom-controls": {
    position: "absolute",
    zIndex: "1",
    right: "0",
    display: "flex",
    padding: "1rem",

    button: {
      height: "1.618rem",
      width: "1.618rem",
      marginLeft: "0.618rem",
      backgroundColor: "$primary",
      border: "none",
      borderRadius: "50%",
      color: "transparent",
    },
  },
});

export { PaintingStyled, ToggleStyled };
