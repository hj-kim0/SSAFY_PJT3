import React from "react";
import Router from "./routers/Router";
import { RecoilRoot } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/styles/_colors.scss";
import "./assets/styles/_common.scss";
import "./assets/styles/_font.css";
import "./assets/styles/_typography.scss";
import "./assets/styles/_utils.scss";
import "./assets/styles/_borders.scss";
import "./assets/styles/_base.scss";

function App() {
  return (
    <RecoilRoot>
      <Router/>
    </RecoilRoot>
  );
}

export default App;
