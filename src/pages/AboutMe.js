import React from "react";

function AboutMe(props) {

    return (
        <section>
            <div>
                <h2>About Me</h2>
                <br></br>
                <img src={props.myPic} className='mePic' alt='me' />
                <p>How about I tell you a little about myself? I am a Full-Stack Software Developer based in Longmont, CO.
                    <br></br>
                    I am currently looking for a company with a dynamic environment and an exciting team so I can continue to nourish
                    my passion to code!
                </p>
                <p>If you want any more information about myself or my work, you can always reach out and say hi! &#128075</p>
            </div>
        </section>
    )
}

export default AboutMe;