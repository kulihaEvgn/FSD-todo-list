import s from './style.module.scss';
import {Task} from "../../model/types";


interface IProps {
  onClick?: (args?:any[]) => void;
  task: Task
}
export const TaskRow = ({ onClick, task}: IProps) => {
  return (
    <div className={s.wrap} onClick={() => onClick && onClick()}>
      <div className={s.toggleCompetedContainer}></div>
      <div className={s.todoRow}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default TaskRow;