import React, {Component} from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Button,
    Modal,
    ModalHeader, ModalBody, Label, Col, Row
} from "reactstrap";
import {Link} from "react-router-dom";
import {LocalForm,Control,Errors} from"react-redux-form"



const RenderDish = (dish)=> {
    dish=dish.dish
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

const RenderComments = (dish)=> {
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

const maxlength = (len) => (val) => !(val) || (val.length<=len)
const minlength = (len) => (val) => (val) && (val.length>=len);


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state ={
            modelOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleModal =()=> this.setState({
        modalOpen :!this.state.modalOpen
    })

    handleSubmit(values){

        console.log("status is " +JSON.stringify(values))
        alert("Submitted see logs"+ " "+ "status is " +JSON.stringify(values))
        this.toggleModal();
    }


    render() {


        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={this.props.comments}/>
                        <Button onClick={this.toggleModal} outline className="fa fa-pencil fa-lg btn-primary button1"> Submit comment</Button>
                    </div>
                </div>


            <Modal isOpen={this.state.modalOpen}>
                <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>

                <ModalBody>
                    <LocalForm onSubmit= {(values) => {this.handleSubmit(values)}} >
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Row className="form-group" >
                            <Col md={12}>
                                <Control.select model=".rating" name="rating"
                                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group" >
                            <Label htmlFor="name" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".name" id="name" name="name"
                                              placeholder="Your Name"
                                              className="form-control"
                                              validators={{minlength:minlength(3),maxlength:maxlength(15)}}
                                />
                                <Errors model=".name" className="text-danger" show="touched" messages={{
                                    minlength : "minlength must be 3",
                                    maxlength : "maxlength must be 15"
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor = "comment" md ={12}>Comments please!</Label>
                            <Col md={12}>
                            <Control.textarea model=".comment" name="comment" rows ="6"
                                              placeholder="Comments" className ="form-control" />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={12}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )

    }
}

export default DishDetail;