import React from "react";

function RightSection(){
    return <div>
        <div className="right-section-container">
        <a class="card-click" href = "#"><div className="right-section-card">
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
        </div></a>
        <a class="card-click" href = "#"><div className="right-section-card">
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
        </div></a>
        <a class="card-click" href = "#"><div className="right-section-card">
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
        </div></a>



        <div className="followers-wrapper">


        <div className="follow-heading"><h4 className="follow-head">Followers</h4></div><div className="view-all-div"><p className="view-all">View All</p></div>
        

            <a className="followers" href ="https://twitter.com/Cristiano"> <img class="follower-img" src= "https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"/>  </a>
            <a className="followers" href ="https://twitter.com/michaelb4jordan"> <img class="follower-img" src="https://pbs.twimg.com/profile_images/832679643291512833/q2p9YNOt_400x400.jpg" /> </a>
            <a className="followers" href ="https://twitter.com/RafaelNadal"> <img class="follower-img" src="https://pbs.twimg.com/profile_images/898280220037443585/mthp5TlW_400x400.jpg" /> </a>
            <a className="followers" href ="https://twitter.com/rogerfederer">  <img class="follower-img" src="https://pbs.twimg.com/profile_images/1181229626284265472/Rh8wrrvO_400x400.jpg" /></a>
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