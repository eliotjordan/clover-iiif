// @ts-nocheck

import React, { useContext, useState } from "react";

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
  const [search, setSearch] = useState<string>("");

  const { dispatch, state } = useContext(ScrollContext);
  const { annotations } = state;

  const index = new Document(config);
  annotations?.forEach((annotation, key) =>
    index.add({
      id: key,
      content: annotation?.body?.value?.replace(/\n/g, ""),
    }),
  );

  const results = index?.search(search).reduce((acc, curr) => {
    return [...new Set([...acc, ...curr.result])];
  }, []);

  const handleScrollTo = (id) => {
    dispatch({
      payload: id,
      type: "updateScrollToCanvas",
    });
  };

  return (
    <>
      <form id="scroll-search">
        <input
          name="search"
          type="text"
          style={{
            backgroundColor: "#6661",
            width: "100%",
            padding: "0.5rem 0.618rem",
            fontSize: "0.9rem",
            outline: "none",
          }}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        {results.map((index) => {
          return (
            <div key={index}>
              <button
                style={{ backgroundColor: "#6662" }}
                onClick={() => handleScrollTo(annotations[index].id)}
              >
                {annotations[index].id}
                {annotations[index].motivation}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScrollSearch;
