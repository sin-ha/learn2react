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
import {postComment, fetchDishes, fetchComments,fetchPromos} from "../redux/ActionCreators";
import {actions} from "react-redux-form";


const mapStateToProps = state => {
    return{
        dishes : state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
        comments: state.comments
    }

}

const mapDispatchToProps = dispatch =>({
  postComment : (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes : () => {dispatch(fetchDishes())},
    fetchComments : () => {dispatch(fetchComments())},
    fetchPromos : () => {dispatch(fetchPromos())},
  resetFeedbackForm : ()=> {dispatch(actions.reset("feedback"))}
})

class Main extends Component {


    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
    }


    render() {

        const HomePage = ()=>{
            return(
                <HomeComponent
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading ={this.props.dishes.isLoading}
                    dishesErrMess = {this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading = {this.props.promotions.isLoading}
                    promoErrMess = {this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({match})=>{
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
                            isLoading ={this.props.dishes.isLoading}
                            errMess = {this.props.dishes.errMess}
                            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))}
                            commentsErrMess = {this.props.comments.errMess}
                            postComment ={this.props.postComment}/>
                    )
        }

        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/contactus' component={()=><ContactUs resetFeedbackForm = {this.props.resetFeedbackForm}/> }/>
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