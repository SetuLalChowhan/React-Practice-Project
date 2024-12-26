import React, { useState } from "react";
import Progress from "./Progress";
import Modal from "./Modal";

const message = [
  "Learn React",
  "Apply For Jobs",
  "Invest Your Income",
  "Completed Thank You",
];

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

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
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
      <div className=" max-w-44 mx-auto ">
        <button
          onClick={handleClick}
          className=" border-none outline-none bg-slate-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
        >
          Open Modal
        </button>
        <Modal handleClick={handleClick} open={open} />
      </div>
    </>
  );
};

const Message = ({ step }) => {
  return <h2>{message[step - 1]}</h2>;
};

export default SignUp;
