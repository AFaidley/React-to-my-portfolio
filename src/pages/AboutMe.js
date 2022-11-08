import React from "react";
import myPic from '../img/me.jpg';

function AboutMe() {

    return (
        <section className="body" >
            <div className="text-center body">
                <h2>About Me</h2>
                <br></br>
                <img src={myPic} className='mePic' alt='me' />
                <br></br>
                <br></br>
                <br></br>
                <p className='aboutMe'>How about I tell you a little about myself? I am a Full-Stack Software Developer based in Longmont, CO.
                    <br></br>
                    In my spare time you will find me outside with my dogs, gaming or creating random apps!
                    <br></br>
                    I am currently looking for a company with a dynamic environment and an exciting team so I can continue to nourish
                    my passion to code!
                </p>
                <p className='aboutMe'>If you want any more information about myself or my work, you can always reach out and say hi!</p>
                <br></br>
                <br></br>
            </div>
        </section>
    )
}

export default AboutMe;