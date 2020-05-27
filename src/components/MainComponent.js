import React, {Component} from 'react';
import {Switch,Route, Redirect} from "react-router-dom";

import Menu from "../components/MenuComponent";
import DishDetail from "./DishDetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import ContactUs from "./ContactUsComponent";

import {DISHES} from "../shared/dishes";
import {LEADERS} from "../shared/leaders";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            dishes : DISHES,
            leaders:LEADERS,
            promotions:PROMOTIONS,
            comments:COMMENTS
        }
    }

    render() {

        const HomePage = ()=>{
            return(
                <HomeComponent
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({match})=>{
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
                            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))} />
                    )
        }

        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/contactus' component={ContactUs}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:id' component={DishWithId} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />

            </div>
        );
    }

}

export default Main;