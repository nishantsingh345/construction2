import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required: boolean;
  id: string;
  name: string;
  errors: { [x: string]: any };
  options: any;
}

function Select({ label, register, required, id, name, errors, options }: Props): ReactElement {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 pb-2" htmlFor={id}>
        {label}
      </label>
      <div className="">
        <select
          name={name}
          id={id}
          className="w-full cursor-pointer text-slate-700 bg-transparent text-sm px-4 py-3 border border-gray-700 rounded-lg shadow-sm border-1  appearance-none focus:outline-none focus:ring-0 focus:border-[#a0cbcd]"
          {...register(name, { required })}
        >
          <option value="">Please select {name}</option>

          {options?.map((opt: any, index: number) => (
            <option key={index} value={JSON.stringify(opt.value)}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div>{errors && errors[name] && <p className="text-red-500">{errors[name].message}</p>}</div>
    </div>
  );
}

export default Select;
