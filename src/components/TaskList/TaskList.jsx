import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/add.svg";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdade,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          //Adiciona um componente controlado por um id e os demais valores

          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdade}
              onDeleteTask={onDeleteTask}
            />
          );
        })}

        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}

        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//Define um tipo de propriedade que é obrigatório para o title
Tasklist.propTypes = {
  //titulo tem como requerimento uma string
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
