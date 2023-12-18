import { InternationalString } from "@iiif/presentation-3";
import { Label } from "src/components/Primitives";
import Options from "./Options";
import { styled } from "src/styles/stitches.config";

const Header = ({
  label,
  width,
}: {
  label: InternationalString;
  width?: number;
}) => {
  const headerWidth = width ? width * 2 : "100%";

  return (
    <StyledHeader
      css={{
        width: `calc(${headerWidth}px + calc(1.618rem * 2))`,
      }}
    >
      <div>
        <Label label={label} style={{ fontSize: "1.382rem" }} />
      </div>
      <div>
        <Options />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled("header", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
});

export default Header;
