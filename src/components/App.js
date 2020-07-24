import React from "react";
import Sidebar from "./Sidebar";
import WelcomeMsg from "./WelcomeMessege";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Blog from "./Blog";
import blogs from "../blogs"

function App() {
    return(
        <div>
            <Sidebar />
            <Searchbar />
            <WelcomeMsg />
            {blogs.map( blog => <Blog
                key={blog.key}
                title={blog.title}
                content= {blog.content.substring(0,50)+"..."}
                img={blog.imgURL}
                img={blog.imgURL}
                img={blog.imgURL}
                img={blog.imgURL}
                claps={(Math.floor(Math.random()*99)+1) + "k"}
            
            />
            
    )}
            <Footer />
        </div>
    ); 
}

export default App;