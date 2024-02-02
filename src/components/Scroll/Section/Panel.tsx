import {
  StyledPanel,
  StyledPanelContent,
  StyledPanelTab,
  StyledPanelTabs,
} from "./Panel.styled";

import HeaderOptions from "./Options";
import React from "react";
import ScrollSearch from "../Search/Search";

const ScrollPanel = () => {
  return (
    <StyledPanel orientation="horizontal" defaultValue="scroll-canvas">
      <StyledPanelTabs>
        <StyledPanelTab value="scroll-annotations">Annotations</StyledPanelTab>
        <StyledPanelTab value="scroll-options">Options</StyledPanelTab>
      </StyledPanelTabs>
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
