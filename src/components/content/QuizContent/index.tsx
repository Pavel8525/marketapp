import React, { useState } from "react";
import QuizForm from "./QuizForm";
import PhoneForm from "./PhoneForm";
import ConfirmationForm from "./ConfirmationForm";
import CongratulationContent from "./CongratulationContent";

/**
 * @todo Доделать переходы между контентом
 */
const QuizContent = () => {
  const [activePage, setActivePage] = useState(0);

  const isActive = (n: number) => activePage === n;

  return (
    <>
      {isActive(0) && <QuizForm setActivePage={setActivePage} />}
      {isActive(1) && <PhoneForm setActivePage={setActivePage} />}
      {isActive(2) && <ConfirmationForm setActivePage={setActivePage} />}
      {isActive(3) && <CongratulationContent />}
    </>
  );
};

export default QuizContent;
