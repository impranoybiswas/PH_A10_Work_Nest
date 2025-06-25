import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Input({
  label,
  name,
  type,
  placeholder,
  passEye,
  ref,
  defaultValue,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  if (passEye === "yes") {
    type = showPassword ? "text" : "password";
  }
  return (
    <label className="floating-label w-full flex items-center">
      <input
        className={`input input-md w-full bg-transparent rounded-full`}
        type={type}
        name={name}
        ref={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <span className="ml-2">
        <p className="text-base px-2 rounded-full border-[1px] border-accent">
          {label}
        </p>
      </span>
      {passEye === "yes" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-sm btn-ghost btn-circle absolute top-1 right-1 z-20"
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </div>
      )}
    </label>
  );
}

export default Input;
