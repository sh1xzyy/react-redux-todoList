import { useDispatch } from "react-redux"
import s from "./FilterButtons.module.css"
import { setStatusFilter } from "../../redux/action"

const FilterButtons = () => {
  const dispatch = useDispatch()

  return (
    <div className={s.filterButtonsWrapper}>
    <button type="button" onClick={() => dispatch(setStatusFilter("all"))}>All</button>
    <button type="button" onClick={() => dispatch(setStatusFilter("onDeveloping"))}>On Developing</button>
    <button type="button" onClick={() => dispatch(setStatusFilter("completed"))}>Completed</button>

    </div>
  )
}

export default FilterButtons