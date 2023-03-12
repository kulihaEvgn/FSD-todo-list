import {combineReducers} from "@reduxjs/toolkit";
import {taskSlice} from "entities/task";
import {reducersApi} from './api';

export const reducers = combineReducers({
  task: taskSlice.reducer,
  ...reducersApi
})