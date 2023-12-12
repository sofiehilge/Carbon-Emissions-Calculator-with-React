import React from "react";
import SkyVideo from "../assets/skyVideo.mp4";
import "../app.css"

const Background = () => {
    return ( 
        <div className="background" style={{height:"100vh", position: "relative"}}>
            <div className="overlay"></div>
            <video src={SkyVideo} autoPlay loop muted style={{width:"100vw", height: "100vh", objectFit: "cover"}}/>

        </div>
     );
}
 
export default Background;