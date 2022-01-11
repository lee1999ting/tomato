import { ADD_TODO,DELETE_TODO,UPDATE_TODO} from "../constant";

export const addTodo = todoObj => {
	return {
		type: ADD_TODO,
		data: todoObj
	}
}

export const updateTodo = (id,todoObj) =>{
	return {
		type: UPDATE_TODO,
		data: {id,todoObj}
	}
}

export const deleteTodo = id =>{
	return {
		type: DELETE_TODO,
		data: id
	}
}

