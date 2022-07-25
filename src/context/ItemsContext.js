import {createContext, useCallback, useReducer} from "react";


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
        case 'ADD_ITEM':
            return{
                ...state,
                items:[...state.items, action.payload],
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

    const addItem = useCallback(async ({listId, title, quantity, price})=>{

        const itemId = Math.floor(Math.random() * 100);
        try{
            const data = await fetch(
                'https://my-json-\n' +
                'server.typicode.com/PacktPublishing/React-\n' +
                'Projects-Second-Edition/items',
                {
                    method:'POST',
                    body:JSON.stringify({
                        id:itemId,
                        listId,
                        title,
                        quantity,
                        price,
                    })
                }
            )
            const result = await data.json();

            if(result){
                dispatch({type:'ADD_ITEM', payload:{
                        id:itemId,
                        listId,
                        title,
                        quantity,
                        price
                    }});
            }
        }catch (e) {
            console.log(e.message)
        }
    },[])


    return(
        <ItemsContext.Provider value={{...state, fetchItems, addItem}}>
            {children}
        </ItemsContext.Provider>
     )
}
export default ItemsContext;

