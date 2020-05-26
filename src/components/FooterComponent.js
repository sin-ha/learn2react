import React from "react";

function FooterComponent() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row offset-1">
                    <div className="col-4 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><span className="fa fa-home fa-lg"></span> Home</a></li>
                            <li><a href="./aboutus.html"><span
                                className="fa fa-info fa-lg"></span>&nbsp;&nbsp;&nbsp;&nbsp;About</a></li>
                            <li><a href="#"><span className="fa fa-list fa-lg"></span> Menu</a></li>
                            <li><a href="./contactus.html"><span
                                className="fa fa-address-book fa-lg"></span> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <span className="fa fa-phone fa-lg"></span>: +852 1234 5678<br/>
                            <span className="fa fa-fax fa-lg"></span>: +852 8765 4321<br/>
                            <span className="fa fa-envelope fa-lg"></span>: <a
                            href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a href="http://google.com/+" className="btn btn-social-icon btn-google"><span
                                className="fa fa-google-plus fa-lg"></span></a>
                            <a href="http://www.facebook.com/profile.php?id="
                               className="btn btn-social-icon btn-facebook"><span
                                className="fa fa-facebook fa-lg"></span></a>
                            <a href="http://www.linkedin.com/in/" className="btn btn-social-icon btn-linkedin"><span
                                className="fa fa-linkedin fa-lg"></span></a>
                            <a href="http://twitter.com/" className="btn btn-social-icon btn-twitter"><span
                                className="fa fa-twitter fa-lg"></span></a>
                            <a href="http://youtube.com/" className="btn btn-social-icon btn-google"><span
                                className="fa fa-youtube fa-lg"></span></a>
                            <a href="mailto:" className="btn btn-social-icon "><span
                                className="fa fa-envelope fa-lg"></span></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center copyright">
                    <div className="col-auto ">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterComponent;