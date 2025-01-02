import React, { useState } from "react";
import Progress from "./Progress";
import Modal from "./Modal";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import { FormProvider, useForm } from "react-hook-form";

const SignUp = () => {
  return (
    <div>
      <Multi />
    </div>
  );
};

const Multi = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onBlur" });

  function handlePrev() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNext() {
    if (step < 3) {
      methods.trigger().then((isValid) => {
        if (isValid) {
          setStep((prev) => prev + 1);
        }
      });
    }
  }
  const totalSteps = 3;

  const [open, setOpen] = useState(false);
  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const renderStep = (step) => {
    console.log(step);
    switch (step) {
      case 1:
        return <Step1 step={step} handleNext={handleNext} />;
      case 2:
        return <Step2 step={step} handleNext={handleNext} />;
      case 3:
        return <Step3 step={step} handleNext={handleNext} />;
      default:
        return null;
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="container1 px-4 "
        >
          <div className="progress_container">
            <Progress totalSteps={totalSteps} step={step} />
            <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
            <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
            <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
          </div>
          <div className="content">{renderStep(step)}</div>
          {step < 3 && (
            <div className="btns">
              <button
                type="button"
                onClick={handlePrev}
                className={`${step <= 1 ? "disabled" : "btn"}`}
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={`${step === totalSteps ? "disabled" : "btn"}`}
              >
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div className=" flex justify-center items-center mt-6">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          )}
        </form>
      </FormProvider>

      {/* <div className=" max-w-44 mx-auto ">
        <button
          onClick={handleClick}
          className=" border-none outline-none bg-slate-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
        >
          Open Modal
        </button>
        <Modal handleClick={handleClick} open={open} />
      </div> */}
    </>
  );
};

export default SignUp;
