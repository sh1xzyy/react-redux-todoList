import { useSelector } from "react-redux"
import TodoItem from "../TodoItem/TodoItem"
import s from "./TodoList.module.css"

const getVisibleItems = (tasks, filter) => {
  switch(filter){
    case "active":
      return tasks.filter(task => !task.completed)
    case "completed":
      return tasks.filter(task => task.completed)
    default:
      return tasks
  }
}

const TodoList = () => {
  const tasks = useSelector(state => state.tasks.items)
  const filter = useSelector(state => state.filter.status)
  const visibleTasks = getVisibleItems(tasks, filter)

  return (
    <>
    <ul className={s.todoList}>
      {visibleTasks.map(task => 
      <li className={s.todoItem} key={task.id}>
        <TodoItem task={task}/>
      </li>
       )}
    </ul>
    </>
  )
}

export default TodoList