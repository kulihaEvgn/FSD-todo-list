import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TodoModel} from "./types";


export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: build => ({
    getAllTodos: build.query<TodoModel[], void>({
      query: () => ({
        url: 'todos'
      })
    }),
    getTodoById: build.query<TodoModel, {id: number}>({
      query: (params) => ({
        url: 'todos',
        params
      })
    }),
  }),
})

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todoApi