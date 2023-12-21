import React, { Dispatch, createContext, useReducer } from "react";

import { Manifest } from "@iiif/presentation-3";

interface StateType {
  activeCanvas?: string;
  isIntersecting?: string[];
  manifest?: Manifest;
  options: {
    offset: number;
  };
}

interface ActionType {
  payload?: any;
  type: string;
}

const initialState: StateType = {
  activeCanvas: undefined,
  isIntersecting: [],
  manifest: undefined,
  options: {
    offset: 0,
  },
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "updateIsIntersecting":
      const activeCanvas = action.payload?.find(
        (entry) => typeof entry !== "undefined",
      );
      return {
        ...state,
        activeCanvas: activeCanvas,
        isIntersecting: action.payload,
      };
    default:
      return state;
  }
}

export const ScrollContext = createContext<{
  dispatch: Dispatch<ActionType>;
  state: StateType;
}>({
  dispatch: () => null,
  state: initialState,
});

interface ScrollProviderProps {
  children: React.ReactNode;
  manifest?: Manifest;
  options?: {
    offset?: number;
  };
}

export const ScrollProvider: React.FC<ScrollProviderProps> = (props) => {
  const { manifest, children } = props;
  const options = {
    ...initialState.options,
    ...props.options,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScrollContext.Provider
      value={{
        state: { ...state, manifest, options },
        dispatch,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
