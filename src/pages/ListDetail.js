import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, } from "react";
import Navbar from "../components/Navbar/Navbar";
import ListItem from "../components/ListItem/ListItem";
import ItemsContext from "../context/ItemsContext";
import ListsContext from "../context/ListsContext";


const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin:2% 5%;
`;

const ListDetail = () => {
    let navigate = useNavigate();
    const {listId} = useParams();

    const {loading, items, error, fetchItems} = useContext(ItemsContext)
    const {list, fetchList} = useContext(ListsContext);

    useEffect(()=>{
        listId && !items.length && fetchItems(listId);
    }, [fetchItems, listId, items]);

    useEffect(()=>{
        listId && fetchList(listId);
    }, [fetchList, listId]);

    return(
        <>
            {navigate && (
                <Navbar goBack={()=>navigate(-1)}
                openForm={()=>navigate(`/list/${listId}/new`)}
                title={list && list.title}/>
            )}
            <ListItemWrapper>
                {loading || error ?(
                    <span>{error || 'Loading ...'}</span>
                ):(
                    items.map((item)=><ListItem key={item.id} data={item}/>)
                )}
            </ListItemWrapper>
        </>
    )
}

export default ListDetail;
