import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as home} from "../container/Home/store"
import clientAxios from '../client/request';
import serverAxios from '../server/request';
const reducer = combineReducers({
    home,
})

export const getStore =(req)=>{
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
} 

export const  getClientStore=()=>{
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}