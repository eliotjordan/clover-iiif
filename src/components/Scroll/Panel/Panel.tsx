import { Content, List, Trigger, Wrapper } from "./Panel.styled";

import HeaderOptions from "./Options";
import { Manifest } from "@iiif/presentation-3";
import React from "react";
import ScrollCanvas from "../Canvas/Canvas";

const Panel = ({
  manifest,
  activeCanvas,
}: {
  manifest: Manifest;
  activeCanvas?: string;
}) => {
  return (
    <Wrapper orientation="horizontal" defaultValue="scroll-canvas">
      <List>
        <Trigger value="scroll-canvas">Canvas</Trigger>
        <Trigger value="scroll-options">Options</Trigger>
      </List>
      <Content value="scroll-canvas">
        <ScrollCanvas manifest={manifest} activeCanvas={activeCanvas} />
      </Content>
      <Content value="scroll-options">
        <HeaderOptions />
      </Content>
    </Wrapper>
  );
};

export default Panel;
