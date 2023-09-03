interface ICardProps {
  children: React.ReactNode;
}

function Card(props: ICardProps) {
  return (
    <div className="flex flex-col rounded bg-black my-2 w-2/3 p-4 gap-4">
      {props.children}
    </div>
  );
}

export default Card;
