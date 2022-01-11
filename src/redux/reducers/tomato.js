import {ADD_TOMATO, FINISH_TOMATO, UPDATE_TOMATO} from "../constant";

const initState = {finish:true} //初始化状态
export default function tomatoReducer(preState=initState,action){
	// console.log(preState)
	const {type,data} = action;
    switch(type){
		case ADD_TOMATO:
			// console.log('totaltime',data)
			return {...data};
		case UPDATE_TOMATO:	
			return {...preState,time:data}
		case FINISH_TOMATO:
			return {...preState,finish:true};
		default:
			return preState
	}
}