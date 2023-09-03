interface IPageProps {
  title?: string;
  children: React.ReactNode;
}

function Page(props: IPageProps) {
  return (
    <>
      {props.title && (
        <h1 className="font-bold text-lg mx-5 text-center">{props.title}</h1>
      )}
      <div className={`flex flex-col items-center justify-center`}>
        {props.children}
      </div>
    </>
  );
}

export default Page;
