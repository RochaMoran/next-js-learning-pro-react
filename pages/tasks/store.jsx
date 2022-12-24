import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";
import { useRef, useState } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export default function Home() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({});
  const taskRef = useRef();

  function handleAddTask() {
    dispatch(addTask(task));
    setTask({});
    taskRef.current.value = "";
  }

  function handleTask(e) {
    setTask({ id: uuid(), name: e.target.value });
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
