import React from "react";
import "./Home.css";
import RainbowPeople from "./Rainbow-people.png";
import croud from "./croud.jpg";

function Home () {
    return (
        <>
            <div className="diagonal-box">
                <div className="secTitle">Promiscuity</div>
                <div className="content"> It’s hard to imagine a world without censorship. There are rules and proper behavior that everyone is expected to follow in today’s society. Our legal system states that people cannot go outside without covering their genitals (and their breasts for women). It’s interesting to wonder what society (in terms of the attitude towards sex) was like before the world’s major religions. I would imagine that there would be at least a little more sexual freedom. However, at the same time, there had to have been a large enough population who saw sexual promiscuity as disgusting or, at the very least undignified. As we see in all three major religions: monogamy and sex only after marriage is emphasized and placed on a pedestal as the right way of life. Furthermore, religious figures are forbidden from participating in sexual activities to preserve their holiness. In Buddhism, “sex is one of four… principal transgressions” (Gyatso, 49) that failing to follow will end a monk’s or nun’s career. Not only that, sex is listed first among the transgression, which Gyatso says they would argue means “sex is the most serious transgression” (Gyatso, 49). For a society to say that: sex is more important to regulate than murder for society’s prosperity signifies how rampant or disgusting the people thought the issue of sex was. </div>
                <a href="https://www.ibcsr.org/index.php/activitites/150-institute-projects/sex-differences-and-religion-project"><img alt="Rainbow-People" src={RainbowPeople}/></a>
            </div>
            <div className="diagonal-box2">
                <img alt="A croud" src={croud}/>
                <div className="secTitle">Towards Progress</div>
                <div className="content2">In an utopian world, we could treat everyone equally, and everyone else would treat us equally. But unfortunately, in our world, we are burdened with history and imperfect beings. In the face of injustice, it is impossible to brush it off and move on because that wouldn’t be just.</div>
            </div>
        </>
    );
}

export default Home;