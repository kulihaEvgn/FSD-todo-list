import { todoApi } from 'shared/api'

const api = [
  todoApi
];

export const reducersApi = api.reduce((acc, elem) => ({[elem.reducerPath]: elem.reducer}), {})
export const middlewareApi = api.map(a => a.middleware);
