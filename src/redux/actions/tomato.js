import { ADD_TOMATO,UPDATE_TOMATO,FINISH_TOMATO} from "../constant";

export const addTomato = tomatoObj => {
	return {
		type: ADD_TOMATO,
		data: tomatoObj
	}
}

export const updateTomato = time =>{
	return {
		type: UPDATE_TOMATO,
		data: time
	}
}

export const finishTomato = data =>{
	return {
		type: FINISH_TOMATO,
		data
	}
}