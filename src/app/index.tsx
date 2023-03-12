import './styles/index.scss';
import { TodoList } from 'pages'
export const App = () => {
  return (
    <div style={{width:"100%", height: '100%', background: 'azure'}}>
      <TodoList/>
    </div>
  )
}