import React, { useState } from "react";
import Progress from "./Progress";

const message = ["Learn React", "Apply For Jobs", "Invest Your Income","Completed Thank You"];

const SignUp = () => {
  return (
    <div>
      <Multi />
    </div>
  );
};

const Multi = () => {
  const [step, setStep] = useState(1);

  function handlePrev() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNext() {
    if (step < 4) setStep((prev) => prev + 1);
  }
  const totalSteps = 4;

  return (
    <div className="container1">
      <div className="progress_container">
        <Progress totalSteps={totalSteps} step={step} />
        <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
        <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
        <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
        <div className={`${step >= 4 ? "circle active" : "circle"}`}>4</div>
      </div>
      <div className="content">
        <Message step={step} />
      </div>
      <div className="btns">
        <button
          onClick={handlePrev}
          className={`${step <= 1 ? "disabled" : "btn"}`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className={`${step === totalSteps ? "disabled" : "btn"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Message = ({ step }) => {
  return <h2>{message[step - 1]}</h2>;
};

export default SignUp;
