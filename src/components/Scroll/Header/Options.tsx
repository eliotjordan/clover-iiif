import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const HeaderOptions = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>View</DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Group>
              <DropdownMenu.Label>Annotations</DropdownMenu.Label>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Transcriptions
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Translations
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Group>

            <DropdownMenu.Group>
              <DropdownMenu.Label>Direction</DropdownMenu.Label>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Column
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>
                <DropdownMenu.ItemIndicator />
                Row
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Group>

            <DropdownMenu.RadioGroup>
              <DropdownMenu.Label>Text size</DropdownMenu.Label>
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
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger />
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent />
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default HeaderOptions;
