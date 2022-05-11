import React from "react";
import films from "./films.json";
import "./Movie.css";


function Movie() {
    let choice = Math.floor(Math.random() * 201);
    return(
        <>
            <div className="movie-div">
                <a href={`https://www.google.com/search?q=${films["films"][choice]["title"]}`}>
                    <img alt="Movie Cover" src={films["films"][choice]["imglink"]}/>
                    <p>{String(films["films"][choice]["title"])}</p>
                </a>
                <p>{(films["films"][choice]["synopsis"]).slice(0,-6)}</p>
                <p>Not Happy with this film?</p>
                <p>Just refresh the page.</p>
                <div className="division">-----</div>
                
                <div>Film analysis: Moonlight (2016)</div>
                <div>----</div>
                <div>A Film that I really liked is Moonlight</div>
                <p className="content">
                    <div>
                    Moonlight is a 2016 film directed by Barry Jenkins. It was the academy award winner for best picture that year. The film shows us a gay boy and how his identity affects his life as he grows. While this premise is inherently anecdotal, his experience guides us and makes a statement on his and our environment. At the time of its release, the film was praised for capturing the life of a homosexual drug dealer with a sheer realism that isn’t lost in today’s viewing of the film. However, I would say there is an element of distance I felt while watching the movie. I feel like my personal environment has moved past some of the struggles in the film. The amount and level of bullying that Chiron faces in his school years, for example, is hard to see happening today. One piece of evidence is the steady decline of bullying in schools over the past decade. Being a student at this time has affected my connection to this film. However, this is not to say that I couldn’t still imagine it happening. 
                    There is also a racial element in the film that I see as a byproduct of the setting. The film is set in a poor and predominantly black/Hispanic neighborhood. We see drug use, violence, broken buildings, and students not focused in class. There is a stark contrast between the environments whenever Chiron is with Juan. With Juan, Chiron is at a nice house and experiences swimming at a beach, a luxury. However that is not his, he may want it, but his home is still in the blighted part of his world, and his socioeconomic status is lower than Juan’s, as Chiron might see it. He doesn’t have much of an education, and as a teenager, he goes to prison. Chiron is left with very few opportunities in this world, and as a viewer of this film, I have no conception of what Chiron can do. We’ve seen Chiron awkwardly moving throughout his early life and being in a predicament where he has to hide his sexuality and identity. What can Chiron do? To me, the next steps in Chiron’s life are unclear.
                    This movie is also, without a doubt, about sex. Chiron's sexuality, identity, and just the physical act of homosexual sex. How does that make me feel? How might a more conservative audience think about this? I thought that the movie did a good job showing how Chiron’s sexuality affected him instead of telling us. In the film, Chiron asks Juan, “am I a faggot?” the movie also shows people around him calling him a faggot. Chiron’s unadulterated actions and shyness as a child, however subtle they may have been, told his environment things that Chiron didn’t know about himself. 
                </div><div>
                    The primary issues facing LGBTQ+ people are how they are treated by other individuals and fighting for their place in society. Chiron is struggling to find his place in society, both in terms of sexuality and making a living in an environment that is so hostile towards him.
                    At the film’s start, we are introduced to Juan as a high-ranking drug dealer. The camera pans smoothly with Juan indicating character stability and confidence. Then we immediately see young Chiron running to an abandoned broken down house with the camera shaking to illustrate Chiron’s instability and shyness. In other words, an almost opposite version of Juan. Chiron hides in the abandoned house to escape from kids who appear to be chasing him while using homophobic slurs. Next, we see Juan finds Chiron in the abandoned apartment. Chiron is shy and withdrawn, and he refuses to talk to Juan. Juan takes the boy to his home, where Chiron meets Juan’s girlfriend, Teresa. When the three are having dinner at their table, we have a scene where Chiron speaks his first words in the film. He introduces himself: “my name is Chiron, but people call me little,” Juan responds, “ok little …,” but Teresa calls Chiron by his name. This scene is the first that addresses Chiron’s name and what other people call him, which is a clear nod to his struggle with identity. 
                </div><div>
                    When Juan takes Chiron back home to his mother, there is a telling scene of Chiron’s mother keeping him away from Juan—hinting at Chiron’s mother knowing that Juan is a drug dealer. We believe that she doesn’t want her son to get involved with such people. We assume she fears that Juan would negatively influence her son. Considering that scene in the context of what happens later in the film, we see that is not the case at all. We find out Chiron’s mother is a drug addict and, ironically, buys drugs from Juan’s ‘employees.’ Juan, however, is a positive force in Chiron’s life and becomes a father figure to Chiron.
                    Juan and Teresa provide a stable and loving home for Chiron. The second time Juan and Chiron meet, Juan teaches Chiron to swim and tells him that “at some point, you gotta decide for yourself who you gonna be, can’t let nobody make that decision for you,” which leads nicely to teen Chiron telling his classmate (who’s picking on him) to stop calling him ‘little.’ The film is on the nose with Chiron’s struggle with identity here. Once again, we see Chiron’s struggle with identity when he asks Kevin why he calls Chiron’ black’ in a disapproving tone. When Chiron asks Juan, “am I a faggot?” we hear one of Juan’s most iconic lines in the film, “you can be gay, but gotta let nobody call you no faggot,” showing us Chiron’s struggle against the social consequences of his sexuality. 
                </div><div>
                    Kevin is the only other gay man in the film. Chiron and Kevin met when they were kids, but unlike Chiron, who was quiet and reserved, Kevin was more extroverted and a part of the social structure of his community. Because of his social status, Kevin cannot be seen socializing closely with Chiron. Kevin only talks to Chiron when they are alone in their teenage years and even have physical relations. On the surface, this sounds great; Chiron can live his sexual identity and also have a place in society. But they have to pretend like they don’t know each other when they are not alone, and Chiron understands this is how it must be. This leads to the emotional conflict in the film when the bully tells Kevin to beat up Chiron after school.
                    In his current environment, a lingering question is what should Chiron do with his life? Chiron desires to find success and happiness, but how does he get there? Where does Chiron go from living with a drug-addicted mother in an economically depressed neighborhood in Miami? After getting beaten up under the orders of a school bully as a teenager, Chiron refuses to snitch on anyone because the bully had forced his only friend Kevin to beat up Chiron. Chiron didn’t want to snitch on Kevin, and snitching on the bully would lead to Kevin, which meant Kevin would be punished, and Chiron didn’t want that. The emotional weight of Chiron crying when the counselor is telling him to snitch was heavy, and he felt isolated. As Chiron said, she didn’t understand; she couldn’t know as he curled inward, crying tears of loneliness and hopelessness. 
                    After the incident, the bully was probably all he could think of. The bully had tarnished the only relationship Chiron had, so he had no shackles at this moment. His walk through the hallway into the classroom, picking up a chair, and finally smashing the chair down led to the release of anger and emotion that he had built up inside since the incident. The yelling and struggle to hit the bully more as part of the release. The crying in silence in the counselor's office from earlier had turned into yelling and enraged assertive action. Chiron takes it upon his own hands to smash a chair on the bully, focusing his anger. 
                    In the next scene, Chiron is taken to prison. It’s poetic that Chiron hit the bully inside the classroom with his teacher inside and witnesses, i.e., in the open. But the bully attacks Chiron without any authority around. The bully attacks with anonymity, and society doesn’t punish him. Society sends Chiron to prison.
                </div><div>

                    Juan plays a parental figure to Chiron and wants the best for him. So Juan wants Chiron to carry himself in a certain way so that people don’t call him a ‘faggot’ because he wants society to treat him well. Kevin says something similar when he tells Chiron to fight so people don’t think he’s soft. Juan, like Kevin, doesn’t want people to believe Chiron is ‘soft’; Juan wants Chiron to grow up demanding respect from society. Juan’s narrative is that people are not very forgiving to those who are different. 
                </div><div>
                    One thing that is present throughout the film is that Chiron is quiet, but to contrast: Kevin (who shares Chiron’s sexual identity) is very talkative and part of the social structure. Kevin conforms to his heteronormative role and even brags to Chiron about having sex with a female. As a consequence of that, I would argue that Chiron can be himself more. On the other hand, Kevin is talkative, and consequently, more of his life is on display. Kevin has to fit in, and he has to show an identity that doesn’t get ostracized by his peers. As teens, the film shows Chiron to be an outcast without any friends at school, and Kevin talks to him only when they’re alone. Kevin admits that he has never really been himself toward the film’s end. This dynamic is what ultimately leads to the conflict in the movie. To enforce the identity Kevin displays, he has to hit Chiron. 
                    Kevin hides his homosexuality to avoid the ostracization he is forced to inflict on Chiron to protect himself. When Chiron meets Teresa as a teen, she tells him to hold his head up, that her house is proud and free. Juan’s house contrasts with the rest of the world, where the people and the environment are oppressive and unforgiving to Chiron. In the movie, we see two possibilities for performing homosexuality, and we see them in Chiron and Kevin. One is to display heteronormativity as Kevin does. Kevin even brags to Chiron about having sexual relations with a girl before becoming sexually involved with Chiron. The other is to keep quiet and keep your sexuality to yourself, as Chiron does. 
                    This path leads to isolation and being othered by society. By displaying heteronormativity, Kevin suppresses his identity for social acceptance, and by being withdrawn from social interactions, Chiron isolates himself and is forced to live in a society where he must constantly deal with oppression. You can knock Kevin for hiding his true self and not helping Chiron, but against society, it’s hard to blame Kevin because his actions are understandable. Kevin didn’t want to fight that uphill battle against societal norms. Kevin chose the better of the two options; it’s the option most people would choose and probably should choose to live a life of least resistance. 
                    Often, we desire to look at the ends to judge the means. In this film, where we have clear time progression, it’s very easy to look at Chiron and Kevin’s endings and point to earlier points and judge their lives based on that point. But I say we should take their lives in separate sections to judge their lives. As kids, Chiron was ostracized and chased around by kids while Kevin hung out with the other boys in a group/comradery setting. As a teenager, Chiron became more perceptive to the bullying and isolated himself from his peers, while Kevin was independent (he’s not seen in a group, and he has a muscle car). As adults, Chiron and Kevin are ‘accepted’ in society. Arguably Chiron has a higher status than Kevin, but that isn’t to say that Chiron’s path is recommended. The sum of Chiron’s pain from society is much greater than Kevin’s.
                </div><div>
                    The United States legalized Gay marriage less than seven years ago, and still, LGBTQ+ rights remain a contested issue in our society. Generally, I wouldn’t say I like making analogies because they are rarely one-to-one. Still, I compared discrimination against LGBTQ+ persons to racial discrimination because they share the core similarities of inequality based on identity. 
                </div><div>
                    In the final stage of the movie, we see Chiron out of jail, and he is almost unrecognizable physically. He is no longer the clumsy, lanky boy he was in his youth. As Kevin puts it, Chiron “looked like he hadn’t been missing any meals”. Chiron now was confident; he had answered the questions of what he would do in life: become a drug dealer like Juan and realize his mother’s fears of Juan’s influence on him. Chiron is a high-ranking person in the drug business like Juan was. Chiron has people working under him who he makes sure are afraid of him. Chiron wears grills and drives a nice car similar to Kevin's when they were teenagers. Chiron’s overcorrected towards heteronormativity. When Kevin pries into Chiron’s life choices, he gets defensive. Chiron says Kevin doesn’t know what Chiron has been through, just like that time with the counselor. Chiron still doesn’t have anyone that he can talk to. They don’t know what it was like, so how can they judge? Every instance of Chiron physically crying (including his conversation with his mother) has been his inability to connect to the person he’s sharing with. No one will be capable of understanding 100% of another person’s suffering in this world.
                </div><div>
                    That is a valid criticism of someone judging your actions and trying to give advice. It is also othering to people who want to be a part of your life. Throughout the film, Chiron doesn’t interact with many people. It takes a while for him even to start talking to Juan. Chiron is, by design, introverted in contrast to Kevin’s and Juan’s extroverted personalities. Extroverts are better at interacting with people, and Chiron isn’t. Chiron is othered by society, reinforcing it by keeping to himself. During the time skip, Chiron understood what it would take to live in society and the kind of life available to him from teenager to adulthood. He didn't finish high school and was in prison as a teenager. Any jobs requiring educational qualifications were out of the question. He has to make a living, so he must find a way to incorporate himself into society. He was familiar with the drug business growing up in such an environment, so he did just that. He took on a similar role as Juan.
                </div>
                </p>

            </div>
        </>
    );
}

export default Movie;