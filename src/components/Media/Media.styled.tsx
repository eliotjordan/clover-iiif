import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "@/stitches";

const Group = styled(RadioGroup.Root, {
  display: "flex",
  flexDirection: "row",
  flexGrow: "1",
  padding: "1.618rem",
  overflowX: "scroll",
  position: "relative",
  zIndex: "0",
});

const MediaStyled = styled("div", {
  overflowX: "scroll",

  "[thumbnail-panel]": {
    "> span, > h3": {
      display: "none",
    },

    padding: "1rem 0",
  },

  "[thumbnail-group]": {
    margin: "0 0.618rem",

    '&[data-selected="true"]': {
      background: "none",
    },
  },

  "[thumbnail-item]": {
    '&[data-selected="true"]': {
      background: "none",
    },

    button: {
      margin: "0",
      padding: "0",
      background: "transparent",
      border: "none",
    },

    figure: {
      margin: "0",
      padding: "0",

      "> div": {
        width: "143px !important",
      },
    },
  },
});

export { Group, MediaStyled };
