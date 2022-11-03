import React, { component } from "react";
import Router from "./routers/Router";
import { RecoilRoot } from "recoil";

import "./assets/styles/_font.css";
import "./assets/styles/_typography.scss";
import "./assets/styles/_utils.scss";
import "./assets/styles/_colors.scss";
import "./assets/styles/_common.scss";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
