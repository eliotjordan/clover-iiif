import {
  StyledPanel,
  StyledPanelContent,
  StyledPanelTab,
  StyledPanelTabs,
} from "./Panel.styled";

import HeaderOptions from "./Options";
import { Manifest } from "@iiif/presentation-3";
import React from "react";
import ScrollCanvas from "../Canvas/Canvas";
import ScrollSearch from "../Search/Search";

const ScrollPanel = ({
  manifest,
  activeCanvas,
}: {
  manifest: Manifest;
  activeCanvas?: string;
}) => {
  return (
    <StyledPanel orientation="horizontal" defaultValue="scroll-canvas">
      <StyledPanelTabs>
        <StyledPanelTab value="scroll-canvas">Canvas</StyledPanelTab>
        <StyledPanelTab value="scroll-annotations">Annotations</StyledPanelTab>
        <StyledPanelTab value="scroll-options">Options</StyledPanelTab>
      </StyledPanelTabs>
      <StyledPanelContent value="scroll-canvas">
        <ScrollCanvas manifest={manifest} activeCanvas={activeCanvas} />
      </StyledPanelContent>
      <StyledPanelContent value="scroll-annotations">
        <ScrollSearch />
      </StyledPanelContent>
      <StyledPanelContent value="scroll-options">
        <HeaderOptions />
      </StyledPanelContent>
    </StyledPanel>
  );
};

export default ScrollPanel;
