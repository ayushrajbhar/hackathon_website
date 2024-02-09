import React from 'react'
import '../App.css'

const Domain = () => {
    const titles = ['Web Development', 'App Development', 'Artificial Intelligence and Machine Learniing', 'Blockchain', 'Cybersecurity and Forensics', 'Cloud Computing and Security', 'IoT and Robotics', 'Sustainability and Environment']

    if (window.screen.width > 1024) {
        window.addEventListener('scroll', (e) => {
            transform(document.querySelector('.sticky'))
        })  
    }
    
    function transform(section){
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll-section')
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0) `;
    }

    let no = 0

    return (
        <div id='domain'>
            <div className="sticky-parent">
                <div className="sticky">
                    <div className="domain-title">DOMAINS</div>
                    <div className="scroll-section">
                        {titles.map((title, i) => {
                            return(
                                <div className="card" key={i}>
                                    <div className="card-no" onLoad={no = no + 1}>{'0' + no}</div>
                                    <div className="card-title">
                                        {title}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domain
