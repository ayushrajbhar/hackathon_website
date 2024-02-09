import React from 'react'
import '../App.css'

const About = () => {
    return (
        <div id="about">
            <div className="about-bg-container">
                <div className="about-bg"></div>
            </div>
            <div className="about-content">
                <span className='about-content-border'></span>
                <h2>
                    <div className='about-title1'>ABOUT</div>
                    <div className='about-title2'>HACKATHON</div>
                </h2>
                <p>Welcome to HACKHAVEN, the ultimate <span>48-hour hybrid</span> hackathon where innovation knows no bounds! Set against the backdrop of technological marvels and the spirit of collaboration, HackHaven gives you the opportunity to solve <span>industrial level problem statements</span> using your creativity, problem-solving skills and cutting-edge technologies.</p>
                <p>Hosted by <span>Computer Society of India</span> Student's Chapter at <span>Shree. L.R. Tiwari College of Engineering</span>, the hackathon consists of problem statements across <span>8 domains</span>. Each team can consist of <span>2-4 members</span> to create real world projects which will be judged by <span>industrial experts</span>. The best projects will win cash prizes. Don't miss the thrilling event and <span>register before 09th March</span>, 2024! Reach out to us in case of any doubts.</p>
            </div>
        </div>
    )
}

export default About
