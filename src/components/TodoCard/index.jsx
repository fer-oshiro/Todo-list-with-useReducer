import React from "react";
import { useTodos } from "../../context/todoContext";
import Form from "../Form";
import If from "../If";
import Modal from "../Modal";
import "./style.css";

export default function TodoCard(props) {
  const { id, title, description, deadline, completed, createdAt } = props;
  const { toggleTodo, deleteTodo } = useTodos();
  const createdFormatted = new Date(createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  const deadlineFormatted = new Date(deadline).toLocaleDateString("pt-BR");

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.closeModal();
  };

  return (
    <div className="todo-card">
      <p className="todo-createdAt">criado em: {createdFormatted}</p>

      <div className="todo-title">
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <label htmlFor={id}>{title}</label>
      </div>

      <If condition={description}>
        <p>descrição: {description}</p>
      </If>
      <If condition={deadline}>
        <p>data final: {deadlineFormatted}</p>
      </If>

      <div className="todo-actions">
        <button onClick={() => deleteTodo(id)}>Apagar</button>
        <button onClick={openModal}>Editar</button>
      </div>

      <Modal ref={modalRef}>
        <Form closeModal={closeModal} {...props} />
      </Modal>
    </div>
  );
}
