import CommonInputWrapper from "@/components/common/form/CommonInputWrapper";
import React from "react";

import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const experiencLevel = [
    {
      name: "Junior Level",
      value: "junior_level",
    },
    {
      name: "Mid Level",
      value: "mid_level",
    },
    {
      name: "Senior Level",
      value: "senior_level",
    },
  ];
  const carrer = [
    {
      name: "Enginner",
      value: "engineer",
    },
    {
      name: "Doctor",
      value: "doctor",
    },
    {
      name: "Teacher",
      value: "teacher",
    },
  ];
  return (
    <div className=" flex flex-col gap-3 w-full ">
      {/* select */}
      <div className="w-full ">
        <CommonInputWrapper
          type="select"
          label="Experince Level"
          register_as="experience_level"
          register={register}
          validationRules={{
            required: "Experience Level is required",
          }}
          placeholder="Enter Your Experience Level"
          errors={errors}
          setValue={setValue}
          options={experiencLevel}
        />
      </div>

      {/* enter phone number */}
      <div className="w-full ">
        <CommonInputWrapper
          type="number"
          label="Phone Number"
          register_as="phone"
          register={register}
          validationRules={{
            required: "Phone Number is required",
          }}
          placeholder="Enter Your Phone Number"
          errors={errors}

        
        />
      </div>


 {/* radio option */}
      <div className="w-full ">
        <CommonInputWrapper
          type="radio"
          register_as="choose_career"
          register={register}
          validationRules={{
            required: "carrer is required",
          }}
          errors={errors}
          setValue={setValue}
          options={carrer}
        />
      </div>

      {/* check-options */}

      <div className="w-full ">
        <CommonInputWrapper
          type="checkbox"
          register_as="check_mark"
          register={register}
          validationRules={{
            required: "Pleace check Conditions ",
          }}
          errors={errors}      
          placeholder="I accept term and Condition"  
        />
      </div>
    </div>
  );
};

export default Step2;
