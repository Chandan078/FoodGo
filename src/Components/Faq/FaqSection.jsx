import React, { useState } from 'react';
import './FaqSection.css'
// import './FAQ.css';

const FAQ = () => {
    const faqData = [

        {
            question: 'What are your restaurant’s opening hours?',
            answer:
                'We are open from 10:00 AM to 11:00 PM every day, including weekends and public holidays.',
        },
        {
            question: 'Do you offer vegetarian and vegan options?',
            answer:
                'Yes, we offer a wide range of vegetarian and vegan dishes. Please check our menu or ask our staff for recommendations.',
        },
        {
            question: 'Can I make a table reservation online?',
            answer:
                'Yes, you can easily reserve a table through our website or by calling our customer service team.',
        },
        {
            question: 'Do you provide home delivery or takeaway services?',
            answer:
                'Absolutely! We offer both home delivery and takeaway. You can place your order on our website or through popular delivery apps.',
        },
        {
            question: 'Are there any special discounts or loyalty programs?',
            answer:
                'Yes, we have seasonal discounts, happy hour deals, and a loyalty program for our regular customers. Ask our staff or check our website for current offers.',
        },
        {
            question: 'Do you accommodate food allergies or dietary restrictions?',
            answer:
                'Yes, we take allergies and dietary needs seriously. Please inform our staff of any allergies when placing your order.',
        },
        {
            question: 'Is parking available at the restaurant?',
            answer:
                'Yes, we provide free parking for our customers. There’s also street parking available nearby.',
        },
        {
            question: 'Do you host private events or parties?',
            answer:
                'Yes, we host private events such as birthdays, anniversaries, and corporate gatherings. Please contact us for booking and menu details.',
        },
        {
            question: 'Can I buy a gift card or voucher?',
            answer:
                'Yes, we offer gift cards and vouchers that can be purchased at the restaurant or online. They make a perfect gift for any occasion.',
        },
        {
            question: 'What cuisines do you specialize in?',
            answer:
                'We specialize in Italian and Mediterranean cuisine, featuring freshly made pasta, wood-fired pizzas, and delicious seafood dishes.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="title">Frequently Asked Questions</h2>
            <div className="faq-wrapper">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggle(index)}
                    >
                        <div className="question">
                            <h4>
                                {item.question}
                                <span className="icon">
                                    {activeIndex === index ? '▲' : '▼'}
                                </span>
                            </h4>
                        </div>
                        <div className="answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;