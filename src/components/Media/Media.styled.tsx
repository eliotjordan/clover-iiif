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

const ThumbnailPanelWrapper = styled("div", {
  overflowX: "scroll",

  "[thumbnail-panel]": {
    padding: "1.618rem 2px",
  },
  "[thumbnail-group]": {
    margin: "0 1.618rem 0 0",
    outline: "2px solid transparent",

    "&[data-selected='true']": {
      outline: "2px solid $primary",
    },
  },
  "[thumbnail-item]": {
    margin: "0",

    "&[data-selected='true']": {
      outline: "none",
    },

    "figure > div": {
      width: "143px !important",
    },
  },
});

export { Group, ThumbnailPanelWrapper };
