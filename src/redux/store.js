import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        items: [
            {id: 1, text: "blablabblablalba", completed: false},
            {id: 2, text: "blablabblablalba", completed: false},
            {id: 3, text: "blablabblablalba", completed: true},
            {id: 4, text: "blablabblablalba", completed: true},
            {id: 5, text: "blablabblablalba", completed: false},
        ]
    },
    filter: {
        status: "all"
    }

}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "tasks/addTask":
            return{
                ...state,
                tasks: {
                    items: [...state.tasks.items, action.payload]
                },
            }
        case "tasks/deleteTask":
            return {
                ...state,
                tasks: {
                    items: state.tasks.items.filter(task => task.id !== action.payload)
                },
            }
            case "tasks/toggleCompleted":
                return {
                    ...state,
                    tasks: {
                        items: state.tasks.items.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
                    }
                }
            case "filter/setStatusFilter":
                return {
                    ...state,
                    filter: {
                        status: action.payload
                    }
                }
    }
    return state
}

export const store = configureStore({
    reducer: rootReducer
})