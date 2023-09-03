import { useState } from "react";

interface IFormItemProps {
  name: string;
  type: "password" | "text" | "email" | "number" | "date";
  onChange: (value: string) => void;
  error?: boolean;
  label?: string;
  placeholder?: string;
}

function FormItem(props: IFormItemProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col grow basis-0">
      {props.label && (
        <label htmlFor={props.name} className="block text-sm font-medium mb-1">
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange(e.target.value);
        }}
        className={`w-full p-2 rounded bg-black border-b ${
          props.error ? "border-error" : ""
        }`}
        placeholder={props.placeholder}
        required={props.error}
      />
    </div>
  );
}

export default FormItem;
