import React from 'react'
import { useState } from 'react';
import FaqCard from './Cards/FaqCard';
import '../App.css';
export const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
          question: "What tools and software do you use for designing?",
          answer:
            "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
          open: true
        },
        {
          question: "Can you ensure responsiveness for the website?",
          answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
          open: false
        },
        {
          question:
            "How many questions does it take to makes a succesful FAQ Page?",
          answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
          open: false
        },
        {
          question: "Can you ensure responsiveness for the website?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "Can you ensure responsiveness for the website?",
          answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
          open: false
        },
        {
          question:
            "How many questions does it take to makes a succesful FAQ Page?",
          answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
          open: false
        }
      ]);
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
  return (
    <div className='w-full'>
        <div className='text-[#FF7A2F] text-lg text-center'>FAQs</div>
        <div className='text-3xl font-bold text-center'>Commonly Asked Questions</div>
        <div className="faqs  mx-auto">
        {faqs.map((faq, index) => (
          <FaqCard faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  )
}
