import React, { useContext } from "react";
import {
  StyledScrollContent,
  StyledScrollSection,
} from "src/components/Scroll/Section/Section.styled";

import { ScrollContext } from "src/context/scroll-context";
import ScrollHeader from "src/components/Scroll/Section/Header";
import ScrollItem from "src/components/Scroll/Item/Item";
import ScrollToggle from "./Toggle";

const ScrollSection = () => {
  const { state } = useContext(ScrollContext);
  const { activeCanvas, manifest } = state;

  if (!manifest) return null;

  return (
    <StyledScrollSection>
      <ScrollHeader label={manifest.label} />
      <ScrollToggle />
      <StyledScrollContent>
        {manifest.items.map((canvas, index) => {
          const pageNumber = index + 1;
          const isLastItem = pageNumber === manifest?.items.length;
          return (
            <ScrollItem
              canvas={canvas}
              hasPageBreak={index + 1 < manifest?.items.length}
              isActive={activeCanvas === canvas.id}
              isLastItem={isLastItem}
              key={index}
              pageNumber={pageNumber}
            />
          );
        })}
      </StyledScrollContent>
    </StyledScrollSection>
  );
};

export default ScrollSection;
