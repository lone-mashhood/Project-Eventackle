import React from "react";
import Home from "../icons/browser.svg";
import Book from "../icons/book.svg";
import Logout from "../icons/logout.svg";
import Menu from "../icons/menu.svg";
import Notepad from "../icons/notepad.svg";
import Settings from "../icons/settings.svg";

function Navbar(){
    return <div id="nav">
    <img className = "site-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbJW3Cs0_akUN3qO04gotMCFGvBuZ_M1z_Bg&usqp=CAU"alt="logo"/>
    <a className="nav-item" href ="#"> <img class="icon-img" src= {Home}/>  </a>
    <a className="nav-item active" href ="#"> <img class="icon-img" src={Menu} /> </a>
    <a className="nav-item" href ="#"> <img class="icon-img" src={Book} /> </a>
    <a className="nav-item" href ="#">  <img class="icon-img" src={Notepad} /></a>
    <a className="nav-item" href ="#"> <img class="icon-img" src={Settings} /> </a>
    <a className="nav-item signout" href ="#"> <img class="icon-img set" src={Logout} /> </a>
  </div>
}

export default Navbar;