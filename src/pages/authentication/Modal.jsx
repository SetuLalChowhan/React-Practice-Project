import React, { useEffect, useRef } from "react";

const Modal = ({ open, handleClick }) => {
  const modal = useRef();

  // Close the modal if clicked outside of it
  const handleOutsideClick = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      handleClick();
    }
  };

  // Close the modal when `Esc` is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClick();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);


  const signUpmutation =useMuation()

  return (
    <div
      className={`${
        open
          ? "fixed inset-0 w-full flex justify-center items-center z-50 transition-opacity duration-300 opacity-100"
          : "fixed inset-0 w-full flex justify-center items-center z-50 transition-opacity duration-300 opacity-0 pointer-events-none"
      } bg-black bg-opacity-50`}
    >
      <div
        ref={modal}
        className="bg-white w-[500px] md:w-[600px] px-6 py-6 h-auto border-2 border-gray-300 rounded-lg shadow-lg transform transition-all duration-300"
        style={{ transform: open ? "scale(1)" : "scale(0.9)" }}
      >
        <div className="flex justify-between items-center text-black">
          <h1 className="text-xl font-semibold">Hi there!</h1>
          <button
            onClick={handleClick}
            className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium"
          >
            Close
          </button>
        </div>
        {/* Modal content goes here */}
        <div className="mt-4">
          <p className="text-gray-600">
            This is a professional-looking modal with smooth transitions.
          </p>

          <button> {
            signUpmutation.isPending ? (   <ClipLoader
  
              loading={signUpmutation.isPending }
              color='white'
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />):"Submit"
}</button>

        
        </div>
      </div>
    </div>
  );
};

export default Modal;
