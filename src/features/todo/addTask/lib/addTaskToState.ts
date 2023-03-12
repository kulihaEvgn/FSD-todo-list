import {Task, taskActions} from "entities/task";
import {v4 as uuid} from "uuid";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

export const addTaskToState = (
  value:string,
  setValue: (value: string) => void,
  dispatch:Dispatch<AnyAction>
) => {
  const newTask: Task = {
    id: uuid(),
    title: value.trim(),
    description: 'without description',
    isCompleted: false,
  }
  if (value.trim() !== '') {
    dispatch(taskActions.add(newTask))
    setValue('');
  }
}