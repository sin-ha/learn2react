import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle,} from "reactstrap";
import {Link} from "react-router-dom";
import {Loader} from "./LoadingComponent";

function RenderDishes({dish}) {
    return(
        <Link to= {`/menu/${dish.id}`} >
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    )
}


const Menu = (props)=> {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderDishes dish={dish}/>
            </div>
        )
    }
    )
        if (props.dishes.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loader />
                    </div>
                </div>
            )
        }
        else if (props.dishes.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
        );

    }




export default Menu;