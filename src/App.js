import React from "react";
import lodash from "lodash";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CommonHeader } from "@pages/Common/Header";
import { CommonFooter } from "@pages/Common/Footer";
import { MainPage } from "@pages/Main";

const App = () => {
  window._ = lodash;

  return (
    <>
      <div className="container">
        <CommonHeader />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
        <CommonFooter />
      </div>
    </>
  );
};

export default App;
