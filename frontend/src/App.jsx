import React from "react";
import Router from "./routers/Router";
import { RecoilRoot } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecoilRoot>
      <Router/>
    </RecoilRoot>
  );
}

export default App;
