import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
  loading: false,
};

const actions = {
  show: (store) => {
    store.setState({ loading: true });
  },
  hide: (store) => {
    store.setState({ loading: false });
  },
};

const useLoading = globalHook(React, initialState, actions);

export default useLoading;
