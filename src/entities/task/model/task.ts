import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Task} from "./types";

interface InitialState {
  tasks: Task[]
}

const initialState: InitialState = {tasks: []}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    remove: (state, action:PayloadAction<string>) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload)
    },
    toggleIsCompleted: (state, action:PayloadAction<string>) => {
      state.tasks = state.tasks.map(todo => {
        if (todo.id === action.payload){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    },
  }
})


export const taskActions = taskSlice.actions;