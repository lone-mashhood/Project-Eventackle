import React from "react"

function TopSection(){
    return <div className="top-section-container">

        <div className="notity-container">
         <a href="#"><img className="notify" src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106685.svg"/></a>   
        </div>
        <div className="language-sel-container">
            <div className="dropdown">
                <button className="dropbtn"> EN
                <i className="fa fa-caret-down"></i>
                </button>
            <div className="dropdown-content">
            <a href="#">Engligh</a>
            <a href="#">Kashmiri</a>
            <a href="#">Urdu</a>
            </div>
            </div>
        </div>
        <div className="user-name-container">
            <h4 className="main-user-name">Mashhood Jeelani</h4>
            <p className="user-handle">@LoneMashhood</p>
        </div>
        <div className="profile-pic-container">
             <img className="main-profile-pic" src="https://picsum.photos/200/300"/>
        </div>

    </div>
}

export default TopSection;