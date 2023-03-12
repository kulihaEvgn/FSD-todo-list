import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {middlewareApi} from './api';
import { reducers } from "./reducers";


export const store = configureStore({
  reducer: reducers,
// @ts-ignore
  middleware: getDefaultMiddleware().concat(middlewareApi)
});