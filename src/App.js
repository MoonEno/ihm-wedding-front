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
import { MainPage } from "@pages/Main";

const App = () => {
  window._ = lodash;

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
      <div>
        {/* <div className="loading">
          <svg className="loading-circle">
            <circle cx="50%" cy="50%" r="25"></circle>
          </svg>
        </div> */}
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={MainPage} />
              <Route path="/main" component={MainPage} />
              <Route path="*" component={pageNotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
