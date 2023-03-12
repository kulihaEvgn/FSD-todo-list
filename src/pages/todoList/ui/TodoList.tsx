import s from './style.module.scss';
import {TaskRow, TaskCard} from 'entities/task';
import {Modal} from "shared/ui";
import { useAppSelector } from "shared/lib";
import {useState} from "react";
import {AddTask} from 'features/todo'

export const TodoList = () => {

  const [isOpenTodo, setIsOpenTodo] = useState(false);
  const {tasks} = useAppSelector((state) => state.task)

  return (
    <div className={s.container}>
      <h1>To-do list</h1>

      <div className={s.addTaskContainer}>
        <h3>Add new task</h3>
        <AddTask/>
      </div>

      <div className={s.todoList}>
        {
          tasks.length
            ? tasks.map((task) => <TaskRow
                task={task}
                key={task.id}
                onClick={() => setIsOpenTodo(true)}
              />).reverse()
            : <h3>Задач пока нет</h3>
        }

      </div>

      <Modal isOpen={isOpenTodo} onClose={() => {
        setIsOpenTodo(false)
      }}>
        <TaskCard/>
      </Modal>
    </div>
  );
};

export default TodoList;