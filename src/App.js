import React from 'react';
import logo from './logo.svg';

import {Navbar,NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href ="/">Ristorante Con Fusionas</NavbarBrand>
        </div>
      </Navbar>
        <Menu />
    </div>
  );
}

export default App;
