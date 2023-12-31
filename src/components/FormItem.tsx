import { useState } from "react";

interface IFormItemProps {
  name: string;
  type: "password" | "text" | "email" | "number" | "date";
  onChange?: (value: string) => void;
  error?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  height?: number;
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
        style={{ height: props.height || 50 }}
        onChange={(e) => {
          setValue(e.target.value);
          if (props.onChange) {
            props.onChange(e.target.value);
          }
        }}
        className={`w-full p-2 rounded border-b ${
          props.error ? "border-error" : ""
        }`}
        value={props.value || value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        required={props.error}
      />
    </div>
  );
}

export default FormItem;
