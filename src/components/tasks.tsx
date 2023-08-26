import { MdDelete } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { VscError } from "react-icons/vsc";

export default function Tasks({ lista_tarefas, tasks, setTasks }: any) {

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task: any) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const removeTask = (taskId: number) => {
    let confirmar = confirm("Realmente deseja deletar essa TASK?");

    if (confirmar === true) {
      const updatedTasks = tasks.filter((task: any) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center gap-5">
      {lista_tarefas.map((item: any, index: any) => (
        <div key={index}>
          {item.completed === true ? (
            <div className="p-5 flex items-center justify-between gap-2 rounded-3xl shadow-2xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold uppercase line-through text-gray-300">
                  {item.title}
                </h1>
                <p className="font-medium text-lg flex gap-2 items-center">
                  Concluido!
                  <span className="text-green-500">
                    <GiConfirmed size={24} />
                  </span>
                </p>
              </div>

              <div className="flex gap-5">
                <button
                  className="bg-red-500 p-2 rounded-3xl hover:scale-110 transition-transform"
                  onClick={() => toggleTaskCompletion(item.id)}
                >
                  <VscError size={32} />
                </button>
                <button
                  className="bg-red-500 p-2 rounded-3xl hover:scale-110 transition-transform "
                  onClick={() => removeTask(item.id)}
                >
                  <MdDelete size={32} />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 flex items-center justify-between gap-2 bg-[#353535] rounded-3xl shadow-2xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
                <p className="font-medium text-lg flex  gap-2 items-center">
                  Não concluido!
                  <span className="text-red-500">
                    <VscError size={24} />
                  </span>
                </p>
              </div>

              <div className="flex gap-5">
                <button
                  className="bg-green-500 p-2 rounded-3xl hover:scale-110 transition-transform"
                  onClick={() => toggleTaskCompletion(item.id)}
                >
                  <GiConfirmed size={32} />
                </button>
                <button
                  className="bg-red-500 p-2 rounded-3xl hover:scale-110 transition-transform"
                  onClick={() => removeTask(item.id)}
                >
                  <MdDelete size={32} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
