import { useEffect, useReducer } from 'react';

const prefix = 'async';

const Actions = {
  PENDING: `${prefix}/pending`,
  FULFILLED: `${prefix}/fulfilled`,
  REJECTED: `${prefix}/rejected`,
};

function reducer(_state, action) {
  switch (action.type) {
    case Actions.PENDING:
      return {
        loading: true,
        data: [],
        error: false,
      };
    case Actions.FULFILLED:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case Actions.REJECTED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(fetchData, deps) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: [],
    error: false,
  });

  useEffect(async () => {
    dispatch({ type: Actions.PENDING });
    try {
      const data = await fetchData();
      if (data !== false) {
        dispatch({ type: Actions.FULFILLED, payload: data });
      }
    } catch (e) {
      dispatch({ type: Actions.REJECTED, payload: e });
    }
  }, deps);

  return [state];
}

export default useAsync;
