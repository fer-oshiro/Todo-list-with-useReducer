import { useTodos } from "../../context/todoContext";
import styles from "./styles.module.css";

export default function Form({
  id,
  title = "",
  description = "",
  deadline = "",
  closeModal
}) {
  const { createTodo, editTodo } = useTodos();
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());

    if (id) editTodo(id, value);
    if (!id) createTodo(value);

    event.target.reset();
    return closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        * Título:
        <input
          type="text"
          name="title"
          required
          autoFocus
          defaultValue={title}
          className={styles.input}
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          name="description"
          defaultValue={description}
          className={styles.input}
        />
      </label>

      <label>
        Data de conclusão:
        <input
          type="date"
          name="deadline"
          defaultValue={deadline}
          min={today}
          className={styles.input}
        />
      </label>

      <input type="submit" value="Salvar" className={styles.input} />
    </form>
  );
}
