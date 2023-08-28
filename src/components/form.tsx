export default function Form_Task({ addTasks, title, setTitle }: any) {
  return (
    <form className="py-5 md:p-5 flex items-center justify-center gap-5">
      <div className="flex flex-col">
        <input
          className="md:w-[500px] md:h-[50px] focus:outline-none text-black p-2 focus:border-purple-500 focus:border-2 rounded-xl transition-colors placeholder:text-sm md:placeholder:text-base"
          type="text"
          placeholder="Qual o titulo da sua tarefa?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="bg-purple-500 flex items-center p-2 hover:bg-purple-700 transition-colors rounded-lg">
        <button className="font-normal text-lg uppercase" onClick={addTasks}>
          Adicionar
        </button>
      </div>
    </form>
  );
}
