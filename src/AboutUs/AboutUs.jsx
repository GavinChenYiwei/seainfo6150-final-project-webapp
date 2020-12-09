import React, { Component } from "react";
import YiweiChen from "./YiweiChen.jpeg";
import "./AboutUs.css";

class AboutUs extends Component {
    render() {
        return (
            <div className="about">
            <h1>About Us</h1>
            <div className="container">
                <h2>Introduction</h2>
                <div className="firstmember">
                <h2>Yiwei Chen</h2>
                <img src={YiweiChen} alt="Yiwei Chen" />
                <p>
                    My name is Yiwei Chen. I havea great passion for web programming.
                    The reason why I choose to do the estate research web app is because I am looking
                    for new appartment in Mountain View, CA. After the graduation, I will move there for working.
                    During this period, I used some different appartment website, such as appartment.com and zillow.
                    These websites are perfect and user friendly. So I'd like to try to develop a simple
                    website like this with some basic sorting and filtering function.
                </p>
                </div>
                <div className="contact">
                    <h2>Contact Me At:</h2>
                    <p>gavin.yiwei@gmail.com</p>
                </div>
            </div>
            </div>
        )
    }
}

export default AboutUs;