import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: burlywood;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
`;

function Header(){
    return(
        <HeaderContainer>
            <Title>Shopping List</Title>
        </HeaderContainer>
    )
}

export default Header;