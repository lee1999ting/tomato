import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from '../constant'

const initState = [{id:'01',task:'开始添加任务吧!',checked:false,start:false,done:false}] //初始化状态
export default function todosReducer(preState=initState,action){
	
	const {type,data} = action;
	switch (type){
		case ADD_TODO:
			return [data,...preState];
		case UPDATE_TODO:
			return preState.map(todoObj => {
				return data.id === todoObj.id ? {...todoObj,...data.todoObj} : todoObj;
			});
		case DELETE_TODO:
			return preState.filter(todoObj => {
				return todoObj.id !== data;
			});
		default:
			return preState
	}
}