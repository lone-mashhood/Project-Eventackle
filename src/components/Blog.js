import React from "react";

function Blog(props) {
  return (
    
    <div className ="blog-container">
    <div className="blog">
        <div> <h1> {props.title} </h1>
              <p> {props.content} </p>
        </div>

        <div className="blog-claps">
            <img className="clapper-img p1" src="https://pbs.twimg.com/profile_images/1181229626284265472/Rh8wrrvO_400x400.jpg"/>
            <img className="clapper-img p2" src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"/>
            <img className="clapper-img p3" src="https://pbs.twimg.com/profile_images/898280220037443585/mthp5TlW_400x400.jpg"/>
            <img className="clapper-img p4" src="data:image/png;base64,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"/>
        </div>

        <div className="clap-number">
            <img className = "clap-icon" src="https://image.flaticon.com/icons/svg/2636/2636674.svg"/>
            <strong><p className="clapper-number">{props.claps}k</p></strong>
        </div>
     
    </div>
    </div>
  );
}

export default Blog;
