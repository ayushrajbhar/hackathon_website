import React, { useEffect, useRef } from 'react'
import '../App.css'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
        lenis.raf(time)
        ScrollTrigger.update();
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const section = useRef(null);
    const col_left = useRef(null)
    useEffect(() => {
        if (window.screen.width > 1024) {
            const el = col_left.current;
            const el2 = section.current;
            const timeln = gsap.timeline({ paused: true });
            // timeln.fromTo(col_left, { y: 0 }, { y: '170vh', duration: 1, ease: 'none' }, 0);
            gsap.fromTo(
                el,
                { y: 0 },
                {
                    y: window.screen.height > 650 ? '190vh' : '260vh',
                    duration: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el2,
                        animate: timeln,
                        start: 'top top',
                        end: 'bottom center',
                        scrub: true
                    },
                },
                0
            );
        
        }
    }, []);

    return (
        <div className="timeline" id='timeline'>
            <div id='vertical' ref={section}>
                <div className="container">
                    <div className="vertical-content">
                        <div className="col col-left" ref={col_left}>
                            <h2 className="vertical-heading">TIMELINE</h2>
                        </div>
                        <div className="col col-right">
                            <div className="vertical-item">
                                <h3>25th Feb, 12:00am</h3>
                                <p>Registration starts.</p>
                            </div>
                            <div className="vertical-item">
                                <h3>13th Mar, 11:59pm</h3>
                                <p>Registration ends.</p>
                            </div>
                            <div className="vertical-item">
                                <h3>13th Mar, 11:59m</h3>
                                <p>Round 1: Abstract Submission Last Date.</p>
                            </div>
                            <div className="vertical-item">
                                <h3>15th Mar, 12:00pm</h3>
                                <p>Announcement of Shortlisted Teams for Round 2.</p>
                            </div>
                            <div className="vertical-item">
                                <h3>18th Mar, 09:00am</h3>
                                <p>Round 2: Coding Round starts. (online)</p>
                            </div>
                            <div className="vertical-item">
                                <h3>20th Mar, 09:00am</h3>
                                <p>Round 2: Coding Round ends.</p>
                            </div>
                            <div className="vertical-item">
                                <h3>20th Mar, 11:00am</h3>
                                <p>First Judging Round. (offline)</p>
                            </div>
                            <div className="vertical-item">
                                <h3>20th Mar, 03:00pm</h3>
                                <p>Second Judging Round. (offline)</p>
                            </div>
                            <div className="vertical-item">
                                <h3>20th Mar, 06:00pm</h3>
                                <p>Winners Announcement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
