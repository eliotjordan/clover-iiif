import { InternationalString } from "@iiif/presentation-3";
import { Label } from "src/components/Primitives";
import { styled } from "src/styles/stitches.config";

const Header = ({ label }: { label: InternationalString }) => {
  return (
    <StyledHeader>
      <strong>
        <Label label={label} />
      </strong>
    </StyledHeader>
  );
};

const StyledHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1",

  strong: {
    fontSize: "1.25rem",
  },
});

export default Header;
