"use client";

import Form_Task from "@/components/form";
import Tasks from "@/components/tasks";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function MyApp() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setLoading(false);
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = () => {
    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <div className="w-[1200px] m-auto p-auto flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold uppercase">Lista de tarefas</h1>
      <div className="w-full p-5 mt-5 bg-[#2b2b2b] rounded-lg">
        <Form_Task addTasks={addTasks} title={title} setTitle={setTitle} />
        {isLoading ? (
          <p className="text-center font-bold text-3xl">Carregando...</p>
        ) : (
          <>
            {tasks.length === 0 ? (
              <p className="text-center font-bold text-3xl">
                Nenhuma Task foi encontrada!
              </p>
            ) : (
              <Tasks lista_tarefas={tasks} tasks={tasks} setTasks={setTasks} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
