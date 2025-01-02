import CommonInputWrapper from "@/components/common/form/CommonInputWrapper";
import React from "react";

import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=" flex flex-col gap-3 w-full ">
      {/* first name last name */}
      <div className="w-full flex gap-2">
        <CommonInputWrapper
          type="text"
          label="First Name"
          register_as="first_name"
          register={register}
          validationRules={{
            required: "First name is required",
          }}
          placeholder="Enter Your First name"
          errors={errors}
        />
        <CommonInputWrapper
          type="text"
          label="Last Name"
          register_as="last_name"
          register={register}
          validationRules={{
            required: "Last name is required",
          }}
          placeholder="Enter Your Last name"
          errors={errors}
        />
      </div>

      {/* email */}

      <div className=" w-full">
        <CommonInputWrapper
          type="email"
          label="Email"
          register_as="email"
          register={register}
          validationRules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          }}
          placeholder="Enter Your Email"
          errors={errors}
        />
      </div>

      {/* password and confirm password */}
      <div className=" w-full">
        <CommonInputWrapper
          label="Password"
          type="password"
          placeholder="* * * * * * * * * * *"
          register={register}
          register_as="password"
          errors={errors}
          validationRules={{
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
            },
          }}
        />
      </div>

      <div className=" w-full">
        <CommonInputWrapper
          label="Confirm Password"
          type="password"
          placeholder="* * * * * * * * * * *"
          register={register}
          register_as="confirm_password"
          errors={errors}
          validationRules={{
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
        />
      </div>
    </div>
  );
};

export default Step1;
