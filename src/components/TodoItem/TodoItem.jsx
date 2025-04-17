import { useDispatch } from "react-redux"
import { deleteTask, toggleCompleted } from "../../redux/action"

const TodoItem = ({task}) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))
  const onToggleBtnClick = () => dispatch(toggleCompleted(task.id))
  return (
    <>
      <input type="checkbox" checked={task.completed} onChange={onToggleBtnClick}/>
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>Delete</button>
    </>
  )
}

export default TodoItem