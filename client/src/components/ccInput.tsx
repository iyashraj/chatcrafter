import React from "react";

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const CCInput: React.FC<InputProps> = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  isRequired = false,
  isDisabled = false,
  className,
}) => {
  return (
    <div className={`flex flex-col  ${className}`}>
      {
        <label id={id} className="font-semibold text-lg">
          {label}
          {isRequired && <span className="text-red-600"> *</span>}
        </label>
      }
      <input
        id={id}
        className={`border-2 border-black opacity-0.9 p-3 pt-2 pb-2 outline-none`}
        onChange={onChange}
        disabled={isDisabled}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default CCInput;
