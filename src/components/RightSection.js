import React from "react";

function RightSection(){
    return <div>
        <div className="right-section-container">
        <div className="right-section-card">
            <div className="cards-left">
                <div className="wrap-icon articles-posted">
                    <span className="material-icons">
                        article
                    </span>
                </div>
                <div className="wrap-items">
                    <div className="section-title">Articles Posted</div>
                    <div className="section-info">{(Math.floor(Math.random()*50)+1)}</div>
                </div>
            </div>
            <div className="cards-right">
                <span className="material-icons">
                    keyboard_arrow_right
                </span>
            </div>
        </div>
        <div className="right-section-card">
            <div className="cards-left">
                <div className="wrap-icon claps-this-week">
                    <span>
                    <img className="clap-icon" src="https://image.flaticon.com/icons/svg/2636/2636674.svg"/>
                    </span>
                </div>
                <div className="wrap-items">
                    <div className="section-title">Claps This Week</div>
                    <div className="section-info">{(Math.floor(Math.random()*99)+1) + "k"}</div>
                </div>
            </div>
            <div className="cards-right">
                <span className="material-icons">
                    keyboard_arrow_right
                </span>
            </div>
        </div>
        <div className="right-section-card">
            <div className="cards-left">
                <div className="wrap-icon followers-this-week">
                    <span className="material-icons">
                        group
                    </span>
                </div>
                <div className="wrap-items">
                    <div className="section-title">New Followers This Week</div>
                    <div className="section-info">{(Math.floor(Math.random()*99)+1)}</div>
                </div>
            </div>
            <div className="cards-right">
                <span className="material-icons">
                    keyboard_arrow_right
                </span>
            </div>
        </div>
        <div className="section-banner">
            <span className="description">Buy Pro Account to Explore <strong>Premium Features</strong></span>
            <button className="purchase-button">
                Purchase Now
            </button>
        </div>
    </div>

    </div>
}

export default RightSection;