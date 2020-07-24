import React from "react";

function Sidebar(){
    return  <div className="sidebar">
      <ul>
        <li><a href="#">
        <span className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbJW3Cs0_akUN3qO04gotMCFGvBuZ_M1z_Bg&usqp=CAU"alt="logo"/></span>
          </a></li>
        <li><a href="#">
        <span className="side-icon"><i className="fas fa-home fa-lg"></i></span>
          </a></li>
        <li><a href="#">
          <span className="side-icon"><i className="fas fa-square fa-lg"></i></span>
          </a></li>
        <li><a href="#">
          <span className="side-icon"><i className="fas fa-volleyball-ball fa-lg"></i></span>
          </a></li>
        <li><a href="#" class="active">
          <span className="side-icon"><i className="fas fa-blog fa-lg"></i></span>
          </a></li>
        <li><a href="#">
          <span className="side-icon"><i className="fas fa-cog fa-lg"></i></span>
          </a></li>
        <li><a href="#">
          <span className="side-icon"><i className="fa fa-sign-out fa-lg"></i></span>
          </a></li>
    </ul>
  </div>
}

export default Sidebar;