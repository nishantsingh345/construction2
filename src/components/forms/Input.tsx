import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required?: boolean;
  type: string;
  id: string;
  name: string;
  errors?: { [x: string]: any };
  maxLength?: any;
  placeholder: any;
  onChange?: any;
  disabled?: boolean;
}

function Input({
  label,
  register,
  required,
  type,
  id,
  name,
  errors,
  maxLength,
  placeholder,
  onChange,

  disabled = false,
}: Props): ReactElement {
  return (
    <div className="relative">
      <div className="relative">
        <input
          type={type}
          id={id}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-700 bg-transparent rounded-md border border-1 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#a0cbcd] peer"
          placeholder=" "
          name={name}
          maxLength={maxLength}
          onChange={onChange}
          autoComplete={type}
          {...register(name, { required })}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-slate-700 font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>
      {errors && errors[name] && (
        <p className="text-sm absolute font-semibold text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default Input;
