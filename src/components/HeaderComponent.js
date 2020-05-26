import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";

class HeaderComponent extends Component{
    render() {
        return(
            <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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