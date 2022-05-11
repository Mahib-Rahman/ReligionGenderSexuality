import React from "react";
import YoutubeEmbed from "./YoutubeEmbed.js";
import "./Video.css";

function Video() {
    return(
        <>
            <div className="video">
                <div>
                    <YoutubeEmbed embedId="TsfYHDaNKhs" />
                </div> 
                <div>
                    I've seen multiple examples of people in the past few months, trying to build 
                    better communities and improving interractions with people. This desire and need
                    to interract with people is just part of the human experience. I chose the two 
                    songs: I Lived, by One Republic and Waving Flag by K'NAAN. The first song has
                    an uplifting beat and message to live life to the fullest and the second song 
                    captures pride and confidence in oneself very well. In the middle of that video I 
                    put a clip from a Japanese show called Haikyuu. The show itself is about always 
                    trying new things when faced with adversity and continuing to get better every day.
                    There is never a reaon to think you cannot do something before you even attempt it. 
                    I think that message was captured well in that scene and quote. It serves as a 
                    transition between the two songs. I hope you enjoy the video.
                </div>
            </div>
        </>
    );
}

export default Video;