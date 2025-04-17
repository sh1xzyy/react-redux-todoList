import { useDispatch, useSelector } from "react-redux"

const TodoItem = ({task}) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(handleDelete(task.id))

  const toggleCompleted = () => dispatch(toggleCompleted(task.id))
  return (
    <>
      <input type="checkbox" checked={task.completed} onChange={() => {toggleCompleted}}/>
      <p>{task.text}</p>
      <button type="button" onChange={() => {handleDelete}}>Delete</button>
    </>
  )
}

export default TodoItem