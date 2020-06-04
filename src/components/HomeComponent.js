import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loader} from "./LoadingComponent";
import {serverUrl} from "../shared/serverUrl";

function RenderCard({item,isLoading,errMess}) {
    console.log({item,isLoading,errMess})
    if (isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loader />
                </div>
            </div>
        )
    }
    else if (errMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else
        return(
            <Card>
                <CardImg src={serverUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}

function HomeComponent(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess = {props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading = {props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;