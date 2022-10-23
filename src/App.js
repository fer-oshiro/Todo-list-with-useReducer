import React from "react";
import "./App.css";
import Form from "./components/Form";
import If from "./components/If";
import Modal from "./components/Modal";
import TodoCard from "./components/TodoCard";
import { useTodos } from "./context/todoContext";

function App() {
  const { todos } = useTodos();
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.closeModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Criar tarefa</button>
      <h1>Lista de tarefas</h1>
      <If condition={todos?.length > 0} fallback={<p>Não há tarefas...</p>}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </If>
      <Modal ref={modalRef}>
        <Form closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
