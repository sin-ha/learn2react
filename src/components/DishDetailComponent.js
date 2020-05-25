import React,{Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


class DishDetail extends  Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (

                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        let comments;
        if (dish != null) {

            let allComments = dish.comments;

           comments = allComments.map((comment, i) => {
                return (
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}</li>
                    </ul>

                )
            })
        }

        else
            return (
                <div></div>
            )
        return (
            <div>
                <h4>Comments</h4>

                {comments}

            </div>

        )
    }


    render() {
        const dish = this.props.dish
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 ">
                    {this.renderComments(dish)}
                    </div>
            </div>
            </div>
            )
    }
}

export default DishDetail;