"use client"
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const QandA = () => {
    const [opened, setOpened] = useState<number | null>(0);

    const faqs = [
        {
            question: "Book Service",
            answer: "Schedule your repair online or call us. We offer doorstep pickup.",
        },
        {
            question: "Diagnosis",
            answer: "Our team will run diagnostics to identify the issue.",
        },
        {
            question: "Repair",
            answer: "We’ll repair your device using genuine parts.",
        },
        {
            question: "Return",
            answer: "Your device will be delivered back to you safely.",
        },
    ];

    const toggleQandA = (index: number) => {
        setOpened(opened === index ? index : index);
    };

    return (
        <div className="space-y-2 w-full">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-300 pb-2">
                    <button
                        onClick={() => toggleQandA(idx)}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="md:text-[32px] sm:text-2xl text-lg font-bold">{faq.question}</span>
                        <GoChevronDown
                            className={`transition-transform duration-200 ${opened === idx ? "rotate-180" : ""}`}
                        />
                    </button>

                    {opened === idx && (
                        <p className="text-gray-500 sm:text-base text-sm mt-1">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QandA;
