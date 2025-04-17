import { useSelector } from "react-redux"

const TodoCounter = () => {
  const tasks = useSelector(state => state.tasks.items)
  
  const taskDetails = tasks.reduce((acc, cur) => {
    if(cur.completed){
      acc.active += 1
    }else {
      acc.completed += 1
    }
    return acc
  } ,{active: 0, completed: 0})

  return (
    <>
    <p>Active: {taskDetails.active}</p>
    <p>Completed: {taskDetails.completed}</p>
    <p>Total: {tasks.length}</p>
    </>
  )
}

export default TodoCounter