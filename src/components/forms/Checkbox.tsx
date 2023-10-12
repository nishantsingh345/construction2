import React, { ReactElement } from "react";

interface Props {
  register: any;
  required: boolean;
  type: string;
  id: string;
  name: string;
  children: any;
  errors: any;
  label: any;
  value: any;
}

function Checkbox({
  register,
  required,
  type,
  id,
  errors,
  name,
  children,
  value,
  label,
}: Props): ReactElement {
  return (
    <>
      <div className="flex space-x-2 items-start">
        <input
          type={type}
          id={id}
          defaultChecked={false}
          name={name}
          className="text-[#0B8188] border-gray-600 checkbox-md cursor-pointer  mt-1 focus:ring-[#0B8188] rounded-md"
          {...register(name, { required })}
        />
        <label htmlFor={id} className="block text-sm text-gray-900">
          {children}
        </label>
      </div>
      {errors && errors[name] && (
        <p className="text-sm font-semibold text-center text-red-500">{errors[name].message}</p>
      )}
    </>
  );
}

export default Checkbox;
