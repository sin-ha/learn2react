import React, {Component} from 'react';
import logo from './logo.svg';

import {Navbar,NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";
import {DISHES} from "./shared/dishes";

class App extends Component {
    render() {


        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusionas</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={DISHES}/>
            </div>
        );
    }

}

export default App;
