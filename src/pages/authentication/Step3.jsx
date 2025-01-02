import CommonInputWrapper from "@/components/common/form/CommonInputWrapper";
import React from "react";

import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className=" flex flex-col gap-3 w-full ">
      <CommonInputWrapper
        type="file"
        label="CV"
        register={register}
        register_as="cv"
        placeholder="Choose File"
        validationRules={{
          required: "Cv is required",
        }}
        errors={errors}
        setValue={setValue}
      />

      <CommonInputWrapper
        type="date"
        label="Select Date"
        register_as="dateField"
        register={register}
        errors={errors}
        setValue={setValue}
        validationRules={{ required: "Date is required" }}
        placeholder="Pick a date"
      />
    </div>
  );
};

export default Step3;
