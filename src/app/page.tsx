"use client";

import Form_Task from "@/components/form";
import LoadingCircle from "@/components/loading";
import Tasks from "@/components/tasks";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function MyApp() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState(true);

  const addTasks = (e: any) => {
    e.preventDefault();

    if (title.trim() === "") {
      return toast.info("Digite alguma tarefa.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }

    try {
      const newTask: Task = {
        id: Date.now(),
        title: title,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTitle("");

      toast.success("Tarefa adicionada.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });

      return;
    } catch (e) {
      return console.error(e);
    }
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setLoading(false);
  }, [tasks]);

  return (
    <main className="flex flex-col items-center justify-center p-5">
      <ToastContainer />
      <h1 className="text-4xl font-bold uppercase">Lista de tarefas</h1>
      <div className="p-5 m-5 bg-[#2c2c2c] rounded-3xl">
        <Form_Task addTasks={addTasks} title={title} setTitle={setTitle} />
        <section className="flex items-center justify-center">
          {isLoading ? (
            <LoadingCircle />
          ) : (
            <>
              {tasks.length === 0 ? (
                <h1 className="text-3xl font-semibold">
                  Nenhuma tasks foi encontrada!
                </h1>
              ) : (
                <Tasks
                  lista_tarefas={tasks}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
