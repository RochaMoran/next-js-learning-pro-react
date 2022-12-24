import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../features/tasks/tasksSlice";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [task, setTask] = useState("");

  return (
    <div className={styles.container}>
      <Link className={styles.buttonLink} href="/tasks/store">
        Crear
      </Link>
      {tasks.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>
                  <Link href={`/tasks/update/${task.id}`}>Editar</Link>
                  <button onClick={() => dispatch(deleteTask(task.id))}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
