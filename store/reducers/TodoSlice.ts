import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo } from "../../models/ITodo"

interface TodoState {
    todos: ITodo[]
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add(state, { payload }: PayloadAction<ITodo>) {
            state.todos.push(payload)
        },
        edit(state, { payload }: PayloadAction<ITodo>) {
            state.todos.forEach(todo => {
                if (todo.id === payload.id) {
                    todo.title = payload.title
                }
            })
        },
        deleteTodo(state, { payload }: PayloadAction<number>) {
            state.todos = state.todos.filter(({ id }) => id !== payload)
        }
    }
});

export default todoSlice.reducer;