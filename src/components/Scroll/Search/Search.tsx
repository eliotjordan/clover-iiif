// @ts-nocheck

import React, { useContext } from "react";
import {
  StyledSearch,
  StyledSearchAnnotationInformation,
  StyledSearchAnnotations,
  StyledSearchForm,
  StyledSearchTag,
} from "./Search.styled";

import { Document } from "flexsearch";
import { ScrollContext } from "src/context/scroll-context";

const config = {
  charset: "latin:extra, arabic:extra, cyrillic:extra, cjk:extra",
  optimize: true,
  tokenize: "full",
  resolution: 9,
  document: {
    id: "id",
    index: "content",
  },
};

const ScrollSearch: React.FC = () => {
  const { dispatch, state } = useContext(ScrollContext);
  const { annotations, searchString } = state;

  const index = new Document(config);
  annotations?.forEach((annotation, key) =>
    index.add({
      id: key,
      content: annotation?.body?.value?.replace(/\n/g, ""),
    }),
  );

  const results = index?.search(searchString).reduce((acc, curr) => {
    return [...new Set([...acc, ...curr.result])];
  }, []);

  const handleScrollTo = (id) => {
    dispatch({
      payload: id,
      type: "updateScrollToCanvas",
    });
  };

  const handleSearchChange = (e) => {
    dispatch({
      payload: e?.target?.value,
      type: "updateSearchString",
    });
  };

  return (
    <StyledSearch>
      <StyledSearchForm id="scroll-search" autocomplete="off">
        <input
          name="search"
          type="text"
          placeholder="Search"
          defaultValue={searchString}
          onChange={handleSearchChange}
        />
      </StyledSearchForm>
      <StyledSearchAnnotations>
        {results.map((index) => {
          return (
            <button
              data-result="true"
              onClick={() => handleScrollTo(annotations[index].id)}
              key={index}
            >
              <StyledSearchAnnotationInformation>
                <StyledSearchTag>
                  {annotations[index].motivation}
                </StyledSearchTag>
                <span>{annotations[index].body.language}</span>
              </StyledSearchAnnotationInformation>
              <span>{annotations[index].body.value.slice(0, 95)}...</span>
            </button>
          );
        })}
        {annotations
          .filter((annotation, index) => !results.includes(index))
          .map((annotation) => {
            return (
              <button
                data-result="false"
                onClick={() => handleScrollTo(annotation.id)}
                key={annotation.id}
              >
                <StyledSearchAnnotationInformation>
                  <StyledSearchTag>{annotation.motivation}</StyledSearchTag>
                  <span>{annotation.body.language}</span>
                </StyledSearchAnnotationInformation>
                <span>{annotation.body.value.slice(0, 95)}...</span>
              </button>
            );
          })}
      </StyledSearchAnnotations>
    </StyledSearch>
  );
};

export default ScrollSearch;
