import React from 'react';
// import Router from './routers/Router';
import { RecoilRoot } from 'recoil';
// import Computerlist from './components/Computerlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoneyUse from './components/outo_manual/MoneyUse';
import ItemDetail from './components/detail/ItemDetail';

function App() {
  return (
    <RecoilRoot>
      {/* <MoneyUse></MoneyUse> */}
      <ItemDetail></ItemDetail>
    </RecoilRoot>
  );
}

export default App;
