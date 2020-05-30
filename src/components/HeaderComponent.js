import React, {Component} from "react";
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form
} from "reactstrap";
import {NavLink} from "react-router-dom";

class HeaderComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
            isNavOpen : false ,
            isModalOpen : false
        }
    this.toggleModal = this.toggleModal.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    }

  toggleNav = () => {
        this.setState({
                isNavOpen : !this.state.isNavOpen
            }
        )
    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " PasswordChars: " + this.password.value.length
            + " Remember: " + this.remember.checked);
        event.preventDefault()
    }

    render() {
        return(
            <>
            <Navbar dark expand="md">
                <NavbarToggler onClick={this.toggleNav}/>
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><i className="fa fa-home fa-lg"></i> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button  onClick={this.toggleModal} className="btn-success">
                                    <span className="fa fa-sign-in fa-lg"> Sign in</span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>



            <header className="jumbotron">
                <div className = "container row-header">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>



                </div>
            </div>

            </header>
            <Modal isOpen={this.state.isModalOpen} >
                <ModalHeader toggle={this.toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                   innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                   innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                       innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        )
    }

}
export default HeaderComponent;