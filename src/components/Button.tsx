interface IButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  disabledText?: string;
}

function Button(props: IButtonProps) {
  return (
    <button
      className={`transition-all duration-300 rounded px-6 py-2 bg-primary disabled:opacity-50`}
      onClick={props.onClick}
      disabled={props.disabled}
      type="submit"
    >
      {props.disabled && props.disabledText ? props.disabledText : props.text}
    </button>
  );
}

export default Button;
