import React from "react";
import '../../App.css';
const FaqCard = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-[#170F49] ">{faq.question}</div>
      <div className="faq-answer text-[#6F6C90] ">{faq.answer}</div>
    </div>
  );
};

export default FaqCard;
