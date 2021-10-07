import * as React from 'react';
import 'styled-components';
import Welcome from '@module/Login/Login';
import FindIdPwd from '@module/Login/FindIdPwd';

export const Login = () => {
  return (
    <>
      <Welcome />
    </>
  );
};

export const Find = () => {
  return (
    <>
      <FindIdPwd />
    </>
  );
};
