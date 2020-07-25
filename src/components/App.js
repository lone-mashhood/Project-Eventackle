import React from "react";
import WelcomeMsg from "./WelcomeMessege";
import TopSection from "./TopSection"
import RightSection from "./RightSection";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Api from "./Api"
import blogs from "../blogs";

function App() {
    return(
        <div>
            <Navbar/>
            <Searchbar />
            <WelcomeMsg />
            {blogs.map( blog => <Blog
                key={blog.key}
                title={blog.title}
                content= {blog.content.substring(0,50)+"..."}
                claps={(Math.floor(Math.random()*99)+1)}
            
            />
            )}
            <Api />
            <TopSection />
            <RightSection />
            {/* <Footer /> */}
        </div>
    ); 
}

export default App;