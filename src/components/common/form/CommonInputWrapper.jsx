import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { format } from "date-fns";

const CommonInputWrapper = ({
  label = "",
  register_as = "",
  register = "",
  errors = {},
  type = "",
  icon,
  validationRules = {},
  placeholder = "",
  options = [],
  setValue,
  trigger,
  mutiple = true,
}) => {
  const commonInputBox = `border-[1px] ${
    (type === "radio" || type === "checkbox") && "border-none"
  } border-gray-300 px-4 ${
    type === "select" || type === "date" ? "py-2" : "py-4"
  } ${
    type === "file" && " cursor-pointer py-0 h-[60px]"
  } rounded-[16px] text-[20px] text-black flex gap-2 items-center relative w-full px-4`;
  const commonInputField = ` text-base w-full text-black border-none outline-none bg-transparent ${
    type === "file" && "hidden"
  }`;

  const [show, setShow] = useState(false);

  const handleSelect = (value) => {
    setValue(register_as, value, { shouldValidate: true });
  };
  const [filePreview, setFilePreview] = useState(null);
  const [date, setDate] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const isImage = file.type.startsWith("image/");
      const previewUrl = isImage ? URL.createObjectURL(file) : null;
      setFilePreview({ name: file.name, previewUrl, isImage });
    }
  };

  const removeFile = async () => {
    setFilePreview(null);
    setValue(register_as, null, { shouldValidate: true });
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setValue(register_as, selectedDate, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={register_as}
          className="text-base font-medium text-[#000]"
        >
          {label}
        </label>
      )}

      <div className={commonInputBox}>
        {icon && <span>{icon}</span>}
        {type === "text" && (
          <input
            type="text"
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
          />
        )}
        {type === "password" && (
          <>
            <input
              type={show ? "text" : "password"}
              name={register_as}
              id={register_as}
              {...register(register_as, validationRules)}
              placeholder={placeholder}
              className={commonInputField}
            />
            <button
              type="button"
              onClick={() => setShow((prevState) => !prevState)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </>
        )}
        {type === "textarea" && (
          <textarea
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
          />
        )}
        {type === "select" && options && (
          <Select onValueChange={handleSelect}>
            <SelectTrigger
              id={register_as}
              name={register_as}
              {...register(register_as, validationRules)}
              className={commonInputField}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {type === "number" && (
          <input
            type="number"
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={`${commonInputField} no-spin`}
          />
        )}
        {type === "email" && (
          <input
            type="email"
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
          />
        )}
        {type === "date" && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal border-none shadow-none px-0 gap-0",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>{placeholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
        {type === "file" && (
          <>
            <label
              htmlFor={register_as}
              className={`w-full ${
                filePreview ? `hidden` : `flex`
              } gap-2 justify-between items-center cursor-pointer h-full `}
            >
              <input
                type="file"
                name={register_as}
                id={register_as}
                {...register(register_as, {
                  ...validationRules,
                  onChange: handleFileChange,
                })}
                className={commonInputField}
              />
              {!filePreview && <p className="text-sm">{placeholder}</p>}
              {!filePreview && <p className="text-sm">icon</p>}
            </label>

            {filePreview && (
              <div className="flex items-start gap-4 ">
                {filePreview.isImage ? (
                  <img
                    src={filePreview.previewUrl}
                    alt={filePreview.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                ) : (
                  <p className="text-sm">{filePreview.name}</p>
                )}
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-red-500"
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </>
        )}
        {type === "checkbox" && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name={register_as}
              id={register_as}
              {...register(register_as, validationRules)}
            />
            <label htmlFor={register_as} className="text-sm">
              {placeholder}
            </label>
          </div>
        )}
        {type === "radio" && options && (
          <div className="flex gap-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  id={`${register_as}-${option.value}`}
                  name={register_as}
                  value={option.value}
                  {...register(register_as, validationRules)}
                />
                <label htmlFor={`${register_as}-${option.value}`}>
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {errors?.[register_as] && (
        <p className="text-red-500 text-sm">{errors[register_as]?.message}</p>
      )}
    </div>
  );
};

export default CommonInputWrapper;
