import React from "react";
//import video from "./Together.mp4";
import "./Video.css";

function Video() {
    return(
        <>
            <div className="video">
                <video width="750" height="500" controls>
                    <source src="https://www.youtube.com/watch?v=TsfYHDaNKhs" type="video/mp4"/>
                </video>
            </div>
        </>
    );
}

export default Video;