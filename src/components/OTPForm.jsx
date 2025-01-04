import React, { useState, useRef } from "react";

const OTPForm = () => {
  const otpLength = 6; // OTP length (set to 6 digits)
  const [otp, setOtp] = useState(new Array(otpLength).fill("")); // Initialize state with 6 empty strings
  const inputRefs = useRef([]); // Refs to focus on the next input

  // Handle OTP input change and move focus
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if there's a value
    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key down event to focus previous input on backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  // Function to handle OTP submission (e.g., on form submit)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Entered: ", otp.join(""));
  };

  return (
    <div className="flex flex-col items-center gap-4 shadow-lg max-w-96 mx-auto px-4 py-2">
        <p className=" text-2xl font-semibold ">Email Verification</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl border border-gray-400 rounded"
          />
        ))}
      </form>
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Submit OTP
      </button>
    </div>
  );
};

export default OTPForm;
