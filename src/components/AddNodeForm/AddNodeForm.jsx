import { Field, Formik, Form, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { addTask } from "../../redux/action"

const AddNodeForm = () => {
    const dispatch = useDispatch()
    
    const validationSchema = Yup.object({
        text: Yup.string().required()
    })

    const onFormSubmit = (value, action) => {
        dispatch(addTask({
            id: crypto.randomUUID(),
            text: value.text,
            completed: false,
        }))
        action.resetForm()
    }
  return (
    <>
    <Formik initialValues={{text: ""}} onSubmit={onFormSubmit} validationSchema={validationSchema}>
        <Form>
            <Field name="text"/>
            <button type="submit">Add</button>
            <ErrorMessage name="text" component={"div"}/>
        </Form>
    </Formik>
    </>
  )
}

export default AddNodeForm