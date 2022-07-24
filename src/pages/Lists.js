import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import {useContext, useEffect} from "react";
import ListsContext from "../context/ListsContext";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5%;
`;

const ListLink = styled(Link)`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
 
  margin-bottom: 2%;
  color: black;
  text-decoration: none;
`;

const Title = styled.h3`
  flex-basis: 80%;
`;

const Lists = () => {

    let navigate = useNavigate();

    const {loading, lists, error, fetchLists} = useContext(ListsContext);

    useEffect(()=>{
        !lists.length && fetchLists()
    }, [fetchLists, lists])

    return(
        <>
            {navigate && <Navbar title='your lists' />}
            <ListContainer>
                {loading || error ? (
                    <span>{error || 'Loading ...'}</span>
                ):(
                    lists.map((list)=>(
                        <ListLink key={list.id} to={`list/${list.id}`}>
                            <Title>{list.title}</Title>
                        </ListLink>
                    ))
                )}
            </ListContainer>
        </>
    )
}

export default Lists;
