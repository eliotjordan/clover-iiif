// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// import { styled } from "src/styles/stitches.config";

const HeaderOptions = () => {
  return (
    <div>
      {/* <DropdownMenu.Root>
        <DropdownMenu.Trigger>View</DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenuContent side="bottom">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Annotations</DropdownMenuLabel>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Transcriptions
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Translations
              </DropdownMenu.CheckboxItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel>Direction</DropdownMenuLabel>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Column
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Row
              </DropdownMenu.CheckboxItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup as={DropdownMenu.DropdownMenuRadioGroup}>
              <DropdownMenuLabel>Text size</DropdownMenuLabel>
              <DropdownMenu.RadioItem value="90">
                <DropdownMenu.ItemIndicator />
                90%
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="100">
                <DropdownMenu.ItemIndicator />
                100%
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="110">
                <DropdownMenu.ItemIndicator />
                110%
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="120">
                <DropdownMenu.ItemIndicator />
                120%
              </DropdownMenu.RadioItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root> */}
    </div>
  );
};

// const DropdownMenuContent = styled(DropdownMenu.Content, {
//   background: "#fff",
//   zIndex: "2",
//   padding: "1rem",
//   boxShadow: "3px 3px 8px #6662",
//   display: "flex",
//   flexDirection: "column",
//   gap: "0.618rem",
//   borderRadius: "3px",
//   minWidth: "161.8px",
// });

// const DropdownMenuGroup = styled(DropdownMenu.Group, {
//   display: "flex",
//   flexDirection: "column",
//   gap: "3px",
// });

// const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
//   height: "1px",
//   width: "100%",
//   background: "#6661",
// });

// const DropdownMenuLabel = styled(DropdownMenu.Label, {
//   fontSize: "0.75rem",
//   opacity: 0.5,
// });

export default HeaderOptions;
