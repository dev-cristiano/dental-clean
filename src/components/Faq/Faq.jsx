import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function FaqItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.FaqItem}>
      <div className={styles.FaqQuestion} onClick={toggleExpansion}>
        {question}
        <span className={styles.FaqArrow}>
          {expanded ? <FaAngleDown /> : <FaAngleRight />}
        </span>
      </div>
      {expanded && <div className={styles.FaqAnswer}>{answer}</div>}
    </div>
  );
}

function Faq() {
  const faqData = [
    {
      question: "When to brush your teeth during the day?",
      answer:
        "After 20 or 30 minutes from main meals, to allow saliva to neutralize the acidity of some foods, such as citrus fruits, coffee and carbonated drinks. Teeth should be brushed for at least two minutes. Those who suffer from gum inflammation should instead reach 4-5."
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn."
    }
    // Add more FAQ items here
  ];

  return (
    <section className={styles.mainContent}>
      <div className="container">
        <div className={styles.FaqHeader}>
          <h3 className="fs-22 fs-blue">FAQ</h3>
          <h1 className="mt-5 fs-32">Do you have any questions?</h1>
        </div>
        <div className={styles.FaqBody}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
