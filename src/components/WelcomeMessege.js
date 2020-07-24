import React from "react";

function WelcomeMsg(props){
    return <div className="hello-msg">

    <div className="welcome-div">
        <h1 className="profile-heading">Mashhood Jeelani here! </h1>
        <p className="welcome-message">Sorry, the web page is not very responsive. I usually use CSS frameworks like Bootstrap to make the pages responsive. You were pretty clear with not using any CSS framework. Pardon me for the page responsiveness! </p>
        <a className="profile-button" href ="https://www.github.com/mashhood-jeelani">View Details</a>
    </div>  



    <div className="hello-pic">
        <img className ="material-pic" src="https://propeller.in/website/wp-content/themes/propeller/assets/landing-page/images/developer.svg"/>
    </div>


</div>
}

export default WelcomeMsg;