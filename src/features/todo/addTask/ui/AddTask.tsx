import {useState} from "react";

import {Input, Button, AddIcon} from 'shared/ui';
import {useAppDispatch} from "shared/lib";

import s from './style.module.scss';
import {addTaskToState} from "../lib/addTaskToState";

export const AddTask = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const onAdd = () => addTaskToState(value, setValue, dispatch)
  const onEnterPress = (e: any) => {
    if (e.key === 'Enter') addTaskToState(value, setValue, dispatch)
  }

  return (
    <div className={s.wrap}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onEnterPress}
        placeholder={'Enter your task'}
      />
      <Button onClick={onAdd}>
        <AddIcon/>
      </Button>
    </div>
  );
};