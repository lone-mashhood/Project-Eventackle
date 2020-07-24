import React from "react";

function Searchbar(){
    return <div className ="searchbar">

        <div className ="search-icon-div">
            <img className = "searchicon" src="https://image.flaticon.com/icons/svg/1086/1086933.svg"/>
        </div>

        <div className ="search-query-div">
            <input className="search-input" type="text" placeholder="Search.."></input>
        </div>


    </div>
}

export default Searchbar;
