import React from "react";
import "./Home.css";
import RainbowPeople from "./Rainbow-people.png";
import croud from "./croud.jpg";

function Home () {
    return (
        <>
            <div className="diagonal-box2">
                <img alt="A croud" src={croud}/>
                <div className="secTitle">Towards Progress</div>
                <p className="content2">
                    In an utopian world, we could treat everyone equally, and everyone else would treat us equally. But unfortunately, in our world, we are burdened with history and imperfect beings. In the face of injustice, it is impossible to brush it off and move on because that wouldn’t be just.
                </p>
                <p>
                    Much of life for is trying to find our place in this social
                    structure that we are part of. As much as we would love for
                    everyone to be loving and accepting of everyone else, I
                    don't think it is possible. For some people it is enough
                    to find their slice of this world that they can belong.
                    Some adjust to the structure to belong. Others cannot find
                    acceptance in an instution where they want to belong. 'There 
                    may not be any explintion for our unjust world, but choosing
                    to live regardless is the deepest expression of our genuine 
                    freedom.' (Albert Camus) The ever existing struggle to find 
                    belonging in this world is essentially life.
                </p>
            </div>
            <div className="diagonal-box">
                <div className="secTitle">Promiscuity</div>
                <p className="content"> 
                    It’s hard to imagine a world without censorship. There are rules and proper behavior that everyone is expected to follow in today’s society. Our legal system states that people cannot go outside without covering their genitals (and their breasts for women). It’s interesting to wonder what society (in terms of the attitude towards sex) was like before the world’s major religions. I would imagine that there would be at least a little more sexual freedom. However, at the same time, there had to have been a large enough population who saw sexual promiscuity as disgusting or, at the very least undignified. As we see in all three major religions: monogamy and sex only after marriage is emphasized and placed on a pedestal as the right way of life. Furthermore, religious figures are forbidden from participating in sexual activities to preserve their holiness. In Buddhism, “sex is one of four… principal transgressions” (Gyatso, 49) that failing to follow will end a monk’s or nun’s career. Not only that, sex is listed first among the transgression, which Gyatso says they would argue means “sex is the most serious transgression” (Gyatso, 49). For a society to say that: sex is more important to regulate than murder for society’s prosperity signifies how rampant or disgusting the people thought the issue of sex was. 
                </p>
                <a href="https://www.ibcsr.org/index.php/activitites/150-institute-projects/sex-differences-and-religion-project"><img alt="Rainbow-People" src={RainbowPeople}/></a>
            </div>
        </>
    );
}

export default Home;