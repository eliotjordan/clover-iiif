import React, { Dispatch, createContext, useReducer } from "react";

import { Manifest } from "@iiif/presentation-3";

interface StateType {
  index: { [key: string]: boolean };
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
  index: {},
  manifest: undefined,
  options: {
    offset: 0,
  },
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
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

  console.log(props);

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
