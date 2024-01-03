import { styled } from "src/styles/stitches.config";

const StyledSearchForm = styled("form", {
  input: {
    width: "100%",
    padding: "0.5rem 0.618rem",
    border: "1px solid #6662",
    fontFamily: "inherit",
    color: "inherit",
    transition: "$all",
    borderRadius: "0",
    outline: "none",
    backgroundColor: "#6661",
    fontSize: "0.9rem",

    "&:focus": {
      border: "1px solid #6663",
    },
  },
});

const StyledSearchTag = styled("span", {
  fontWeight: "700",
});

const StyledSearchAnnotationInformation = styled("div", {
  display: "flex",
  gap: "0.25rem",
});

const StyledSearchAnnotations = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  paddingTop: "1rem",

  button: {
    backgroundColor: "#6660",
    opacity: "0.7",
    transition: "$all",
    padding: "0.5rem 0.618rem",
    fontSize: "0.9rem",
    lineHeight: "1.1rem",
    textAlign: "left",
    borderRadius: "6px",
    border: "1px solid #6662",
    borderBottomWidth: "2px",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",

    "&:hover": {
      opacity: "1",
      boxShadow: "5px 5px 13px #6662",
    },

    "&[data-result=true]": {
      backgroundColor: "#6661",
      opacity: "1",

      "&:hover": {
        backgroundColor: "#6662",
      },
    },
  },
});

const StyledSearch = styled("div", {});

export {
  StyledSearch,
  StyledSearchForm,
  StyledSearchAnnotations,
  StyledSearchAnnotationInformation,
  StyledSearchTag,
};
