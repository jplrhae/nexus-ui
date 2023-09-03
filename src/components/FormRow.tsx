interface IFormRowProps {
  className?: string;
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  children: React.ReactNode;
}

function FormRow(props: IFormRowProps) {
  return (
    <div
      className={`${props.className && props.className} flex flex-row ${
        props.justify ? `justify-${props.justify}` : ""
      }`}
      style={{ gap: props.gap ? props.gap : 0 }}
    >
      {props.children}
    </div>
  );
}

export default FormRow;
