import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <h2 className="accordion-title">{title}</h2>
        <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
