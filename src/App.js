import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import lodash from "lodash";

import { WelcomePage } from "@pages/Welcome";

const App = () => {
  window._ = lodash;

  const [, loadingApi] = useLoading();

  /**
   * 상황에 따른 페이지 분리
   */

  function pageNotFound() {
    return (
      <div>
        <h1> 404 Page Not Found</h1>
      </div>
    );
  }
  /**
   * 접속 핸드폰 가져오기
   */
  const getMobileOs = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "IOS";
    }

    return "WEB";
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={WelcomePage} />
            <Route path="/main" component={MainPage} />
            <Route path="*" component={pageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
