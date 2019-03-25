import {CHANGE_LIST} from "./constants";

const defaultState={
    newsList:[],
};

export default (defaultState,{type,list})=>{
    switch(type) {
		case CHANGE_LIST:
			return {
				...state,
				newsList: list
			}
		default:
			return state;
	}
}