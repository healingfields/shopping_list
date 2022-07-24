import {createContext, useCallback, useReducer, useState} from "react";
import useDataFetching from "../hooks/useDataFetching";

export const ItemsContext = createContext();

const initialState = {
    items:[],
    error:'',
    loading:true
};

const reducer = (state, action) => {

    switch (action.type){
        case 'GET_ITEMS_SUCCESS':
            return{
                ...state,
                items:action.payload,
                loading:false
            };
        case 'GET_ITEMS_ERROR':
            return {
                ...state,
                items:[],
                error:action.payload,
                loading:false
            };
        default:
            return state;
    }
}


export const ItemsContextProvider = ({children}) => {

    const[state, dispatch] = useReducer(reducer, initialState);

    const fetchItems = useCallback(async (listId) => {
        try{
            const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}/items`);
            const result = await data.json();

            if(result){
                dispatch({type:'GET_ITEMS_SUCCESS', payload:result})
            }
        }catch (e) {
            dispatch({type:'GET_ITEMS_ERROR', payload:e.message})
        }
    }, [])


    return(
        <ItemsContext.Provider value={{...state, fetchItems}}>
            {children}
        </ItemsContext.Provider>
     )
}
export default ItemsContext;

