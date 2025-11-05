"use client"

import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';

const FAQ_QandA = () => {
    const [opened, setOpened] = useState(0);

    function handleClick(num: number) {
        if (opened === num) {
            setOpened(-1)
        } else {
            setOpened(num);
        }
    }

    return (
        <div
            className='w-full flex flex-col sm:gap-4 gap-2'
        >
            {questionAndAnswer.map((qna) => (
                <div
                    key={qna.id}
                    onClick={() => handleClick(qna.id)}
                    className={`${opened === qna.id ? "bg-linear-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02]" : "bg-gray-700"}` + ' p-px sm:rounded-2xl rounded-xl cursor-pointer'}
                >
                    <div
                        key={qna.id}
                        className={"md:p-8 sm:p-5 p-3 bg-[#0F0F0F] text-white sm:rounded-2xl rounded-xl w-full"}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className={`${opened === qna.id ? "bg-linear-to-r from-[#E60283] via-[#F1D507] to-[#F1D507] bg-clip-text text-transparent" : "text-white"} sm:text-base text-sm`}>
                                {qna.question}
                            </h3>

                            <button
                                onClick={() => handleClick(qna.id)}
                            >
                                <FaCaretDown className={`${opened === qna.id ? "text-[#DA4A02] rotate-180 transition duration-100" : "text-gray-500"} cursor-pointer hover:text-[#E60283]`} />
                            </button>
                        </div>

                        {qna.id === opened
                            &&
                            <p className='text-gray-500 sm:text-base text-sm sm:mt-4 mt-2 leading-relaxed'>
                                {qna.answer}
                            </p>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
};

const questionAndAnswer = [
    {
        id: 1,
        "question": "How long does a typical repair take?",
        "answer": "Most repairs are completed within 2 - 4 hours depending on the complexity and availability of parts."
    },
    {
        id: 21,
        "question": "Do you use genuine Apple parts?",
        "answer": "Yes, we exclusively use genuine Apple parts and high-quality OEM components. All parts come with manufacturer warranties and meet Apple's quality standards. We never compromise on part quality to ensure your device performs optimally."
    },
    {
        id: 12,
        "question": "How long does a typical repair take?",
        "answer": "Screen replacements usually take a few hours, while more complex repairs such as logic board issues may take longer."
    },
    {
        id: 13,
        "question": "How long does a typical repair take?",
        "answer": "We aim to provide same-day service for common issues like battery replacements whenever possible."
    },
    {
        id: 14,
        "question": "How long does a typical repair take?",
        "answer": "Repair times can vary during busy periods, but we always inform customers of estimated timelines when booking the repair."
    }
]

export default FAQ_QandA