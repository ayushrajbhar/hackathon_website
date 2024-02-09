import React, { useState } from 'react'
import '../App.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Faqs = () => {
    const faqs = [
        {
            question: 'Where will the Hackathon take place?',
            answer: 'The abstract submission and coding round will be conducted online and the judging rounds will be conducted offline on Shree L.R. Tiwari College of Engineering campus. For teams from outside of Mumbai judging rounds will be conducted online.'
        },
        {
            question: 'What is the eligibility criteria for this Hackathon?',
            answer: 'HackHaven is open to all full time students of engineering and graduate colleges, including college students from all disciplines, across India.'
        },
        {
            question: 'Are individuals allowed to participate in HackHaven?',
            answer: 'No. HackHaven is a team based event with 2-4 members.'
        },
        {
            question: 'How many domains can a team participate in?',
            answer: 'Each team can participate in only a single domain.'
        },
        {
            question: 'What is abstract submission?',
            answer: 'Participants will have to submit an abstract of their solution to the problem statement to qualify for Round 2.'
        },
        {
            question: 'Where are the problem statements?',
            answer: 'After registration participants will receive the problem statements via email.'
        },
        {
            question: 'Will the problem statements for both the rounds be the same?',
            answer: 'Yes. In the first rounds participants will be expected to submit the abstract of their solution and in the second round they will have to develop the solution.'
        },
        {
            question: 'Which technologies or frameworks must be used for Hackhaven?',
            answer: 'There are no restrictions in the selection of technologies or frameworks. Teams can be flexible with their choice of technologies.'
        },
        {
            question: 'What other facilities will be provided at the hackathon?',
            answer: 'Participants will have access to food stalls and beverages and also fun activities during the event.'
        },
        {
            question: 'Have any other quries?',
            answer: 'Feel free to reach out to us on social media or our e-mail: csi@slrtce.in'
        },
    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className='faqs' id='faqs'>
            <h2 className='faqs-title'>FAQs</h2>
            <div className="accordian">
                {faqs.map((item, i) => {
                    return(
                        <div className="faq-item" onClick={() => toggle(i)} key={i}>
                            <div className="faq-question-box">
                                <h2 className='faq-question'>{item.question}</h2>
                                {selected === i ? <FaMinus className='faq-icon' /> : <FaPlus className='faq-icon' />}
                            </div>
                            <div className={selected === i ? 'faq-answer faq-answer-show' : 'faq-answer'}>{item.answer}</div>
                            <span className='faq-item-border'></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faqs
