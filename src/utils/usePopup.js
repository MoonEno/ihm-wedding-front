import React from 'react';
import globalHook from 'use-global-hook';
import { getErrorMessage, getPaymentErrorMessage } from './useErrorMessage';

const initialState = {
  title: 'title',
  message: 'message',
  onConfirm: undefined,
  onCancel: undefined,
  isVisible: false,
  isMndtClse: false,
};

const actions = {
  open: (store, config = {}) => {
    store.setState({ ...config, isVisible: true });
  },
  close: (store) => {
    store.setState({ isVisible: false });
  },
  openMndtClse: (store, config = {}) => {
    store.setState({ ...config, isMndtClse: true });
  },
  closeMndtClse: (store) => {
    store.setState({ isMndtClse: false });
  },
  error: (store, errorMsg, isPayment, cnt) => {
    let res = '';

    if (isPayment) {
      res = getPaymentErrorMessage(errorMsg);
    } else {
      res = getErrorMessage(errorMsg, cnt);
    }

    store.setState({
      title: res.title,
      message: res.message,
      isVisible: true,
    });
  },
};

const usePopup = globalHook(React, initialState, actions);

export default usePopup;
