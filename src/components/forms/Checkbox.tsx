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
}

function Checkbox({
  register,
  required,
  type,
  id,
  errors,
  name,
  children,
  label,
}: Props): ReactElement {
  return (
    <>
      <div className="flex space-x-2 items-start">
        <input
          type={type}
          id={id}
          defaultChecked={true}
          name={name}
          className="text-[#0B8188] border-gray-600 rounded mt-1 focus:ring-[#0B8188]"
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
