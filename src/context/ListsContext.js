import {createContext, useCallback, useReducer} from "react";
import useDataFetching from "../hooks/useDataFetching";

export const ListsContext = createContext();

const initialState = {
    lists: [],
    error: '',
    loading: true
}
const reducer = (state, action) => {
    switch (action.type){
        case 'GET_LISTS_SUCCESS':
            return{
                ...state,
                lists: action.payload,
                loading:false,
            };
        case 'GET_LISTS_ERROR':
            return{
                ...state,
                error:action.payload,
                lists:[],
                loading:false
            };
        default:
            return state;
    }
}

export const ListsContextProvider = ({children}) => {

    const[state, dispatch] = useReducer(reducer, initialState);

    const fetchLists = useCallback(async () => {
        try{
            const data = await fetch(
                'https://my-json-\n' +
                'server.typicode.com/PacktPublishing/React-\n' +
                'Projects-Second-Edition/lists'
            );
            const result = await data.json();

            if (result){
                dispatch({type:'GET_LISTS_SUCCESS', payload:result});
            }
        }catch (e) {
            dispatch({type:'GET_LISTS_ERROR', payload:e.message});
        }
    }, [])


    return (
        <ListsContext.Provider value={{...state, fetchLists}}>
            {children}
        </ListsContext.Provider>
    )
}
export default ListsContext;