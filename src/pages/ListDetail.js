import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import useDataFetching from "../hooks/useDataFetching";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import ListItem from "../components/ListItem/ListItem";

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin:2% 5%;
`;

const ListDetail = () => {
    let navigate = useNavigate();
    const {listId} = useParams();

    const [loading, data, error] = useDataFetching(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items/'
    );

    const [items, setItems] = useState([]);

    useEffect(()=>{
        data &&
            listId &&
            setItems(data.filter((item)=>item.listId === parseInt(listId)));
    }, [data, listId]);

    return(
        <>
            {navigate && (
                <Navbar goBack={()=>navigate(-1)}
                openForm={()=>navigate(`/list/${listId}/new`)}/>
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
