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
import {postComment, fetchDishes, fetchComments,fetchPromos,fetchLeaders,postFeedback} from "../redux/ActionCreators";
import {actions} from "react-redux-form";
import {TransitionGroup,CSSTransition} from "react-transition-group";

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
  postFeedback : (values)=> dispatch(postFeedback(values)),
    fetchDishes : () => {dispatch(fetchDishes())},
    fetchComments : () => {dispatch(fetchComments())},
    fetchPromos : () => {dispatch(fetchPromos())},
    fetchLeaders : () => {dispatch(fetchLeaders())},
  resetFeedbackForm : ()=> {dispatch(actions.reset("feedback"))}
})

class Main extends Component {


    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
        this.props.fetchLeaders()
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
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderLoading = {this.props.leaders.isLoading}
                    leaderErrMess ={this.props.leaders.errMess}
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
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path='/contactus' component={()=><ContactUs resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/> }/>
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders.leaders} isLoading = {this.props.leaders.isLoading}
                                                                         errMess ={this.props.leaders.errMess}/>} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:id' component={DishWithId} />
                    <Redirect to="/home" />
                </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <FooterComponent />

            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));