export default function Form_Task({ addTasks, title, setTitle }: any) {
  return (
    <form className="p-5 flex items-center justify-center gap-5">
      <div className="flex flex-col">
        <input
          className="w-[500px] h-[50px] focus:outline-none text-black p-2 focus:border-purple-500 focus:border-2 rounded-xl transition-colors"
          type="text"
          placeholder="Qual o titulo da sua tarefa?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="bg-purple-500 flex items-center p-2 hover:scale-110 transition-transform rounded-lg">
        <button className="font-bold text-lg uppercase" onClick={addTasks}>
          Adicionar
        </button>
      </div>
    </form>
  );
}
