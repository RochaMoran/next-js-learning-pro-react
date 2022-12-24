import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../../features/tasks/tasksSlice";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function Update() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [task, setTask] = useState({});
  const taskRef = useRef();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      setTask(task);
      taskRef.current.value = task.name;
    }
  }, [tasks, id]);

  function handleAddTask() {
    dispatch(updateTask(task));
    setTask({});
    router.push("/tasks");
  }

  function handleTask(e) {
    setTask({ ...task, name: e.target.value });
  }

  return (
    <div className={styles.container}>
      <input
        placeholder="Ingrese tarea"
        onChange={(e) => handleTask(e)}
        ref={taskRef}
      />
      <div className={styles.containerButtons}>
        <button onClick={handleAddTask}>Crear</button>
        <Link className={styles.buttonLink} href="/tasks">
          Ver tareas
        </Link>
      </div>
    </div>
  );
}
