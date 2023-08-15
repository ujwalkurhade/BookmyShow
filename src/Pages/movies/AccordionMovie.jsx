import React, { useState } from "react";

function AccordionMovie() {
  const [isOpen, setIsOpen] = useState(false);
  const handlClick = () => setIsOpen(!isOpen);
  return (
    <div>
      <h2 onClick={handlClick}>Tirle1</h2>
      {isOpen ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officia?</p> : null}
    </div>
  );
}

export default AccordionMovie;
