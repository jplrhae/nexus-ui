import { IUser } from "../interfaces/IUser";

interface IFormProjectPage {
  user: IUser;
}

function FormProjectPage(props: IFormProjectPage) {
  return (
    <div className="flex flex-col mt-2 items-center text-xl">
      <div className="flex flex-col">
        <h1 className="text-3xl gap-5">Create a new project</h1>
        <hr className="mt-2 mb-3" />

        <div className="flex flex-col">
          <div className="flex flex-row justify-start">
            <h1 className="p-1 text-lg">Owner</h1>
          </div>

          <div className="flex flex-row gap-2">
            <h1 className="border p-2 rounded"> {props.user.username}</h1>
            <input
              className={`w-full p-2 rounded bg-black border-b`}
              type="text"
              placeholder="Project name"
            />
          </div>

          <h1 className="mt-2 text-lg">Description (Optional)</h1>
          <input
            className={`w-full p-2 rounded bg-black border-b`}
            type="text"
            placeholder=""
          />

          <h1 className="mt-2 text-lg">Tags (Optional)</h1>
          <input
            className={`w-full p-2 rounded bg-black border-b mb-2`}
            type="text"
            placeholder=""
          />

          <div className="flex flew-row gap-1">
            <button className="bg-sky-500 rounded p-1 bg-[#0ea5e9bf]">
              #Exemplo1
            </button>
            <button className="bg-sky-500 rounded p-1 bg-[#0ea5e9bf]">
              #Exemplo2
            </button>
            <button className="bg-sky-500 rounded p-1 bg-[#0ea5e9bf]">
              #Exemplo3
            </button>
            <button className="bg-sky-500 rounded p-1 bg-[#0ea5e9bf]">
              #Exemplo4
            </button>
          </div>
          <button className="bg-[#EF3340] rounded p-1 mt-4">
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormProjectPage;
