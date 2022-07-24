import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1%;
  background-color: lightgray;
  border-radius: 5px;
  margin-bottom: 2%;
  text-decoration: none;
`;

const Title = styled.h3`
  flex-basis: 70%;
`;

const Total = styled.span`
  flex-basis: 15%;
  font-weight: bold;
  text-align: right;
`;

const ListItem = ({data}) => {
    return(
        <ListItemContainer>
            <Title>{data.title}</Title>
            <Total>{`Quantity:${data.quantity}`}</Total>
            <Total>{`$ ${data.price}`}</Total>
        </ListItemContainer>
    )
}

export default ListItem;