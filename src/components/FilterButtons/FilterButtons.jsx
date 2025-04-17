import { useDispatch, useSelector } from "react-redux"
import s from "./FilterButtons.module.css"

const FilterButtons = () => {
  const value = useSelector(state => state.filter.status)
  const dispatch = useDispatch()

  const onButtonClick = () => {

  }

  return (
    <div className={s.filterButtonsWrapper}>
    <button type="button" onClick={() => onButtonClick("all")}>All</button>
    <button type="button" onClick={() => onButtonClick("onDeveloping")}>On Developing</button>
    <button type="button" onClick={() => onButtonClick("completed")}>Completed</button>

    </div>
  )
}

export default FilterButtons