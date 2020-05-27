import React, {Component} from 'react';
import {Switch,Route, Redirect} from "react-router-dom";

import Menu from "../components/MenuComponent";
import DishDetail from "./DishDetailComponent";
import {DISHES} from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            dishes : DISHES,
        }
    }

    render() {

        const HomePage = ()=>{
            return(
                <HomeComponent/>
            )
        }

        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />

            </div>
        );
    }

}

export default Main;