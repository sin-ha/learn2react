import React, {Component} from 'react';
import {Switch,Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";


import Menu from "../components/MenuComponent";
import DishDetail from "./DishDetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import ContactUs from "./ContactUsComponent";
import About from "./AboutComponent";
import {addComment} from "../redux/ActionCreators";


const mapStateToProps = state => {
    return{
        dishes : state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
        comments: state.comments
    }

}

const mapDispatchToProps = dispatch =>({
  addComment : (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment))
})

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const HomePage = ()=>{
            return(
                <HomeComponent
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({match})=>{
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))}
                            addComment ={this.props.addComment}/>
                    )
        }

        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/contactus' component={ContactUs}/>
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:id' component={DishWithId} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />

            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));