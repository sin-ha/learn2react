import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Jumbotron, } from "reactstrap";
import {NavLink} from "react-router-dom";

class HeaderComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
            isNavOpen : false ,
        }
    }

  toggleNav = () => {
        this.setState({
                isNavOpen : !this.state.isNavOpen
            }
        )
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
                    </Collapse>
                </div>
            </Navbar>



            <header class="jumbotron">
                <div class = "container row-header">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>



                </div>
            </div>

    </header>
            </>
        )
    }

}
export default HeaderComponent;