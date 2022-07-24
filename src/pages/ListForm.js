import styled from "styled-components";
import Button from "../components/Button/Button";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormItem from "../components/FormItem/FormItem";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const ListForm = () => {
    let navigate = useNavigate();
    const {listId} = useParams();

    return(
        <>
            {navigate && <Navbar goBack={()=>navigate(-1)} title='Add Item'/>}
            <FormWrapper>
                <FormItem
                    id='title'
                    label='Title'
                    placeholder='Insert Title'
                />
                <FormItem
                    id='quantity'
                    label='Quantity'
                    placeholder='0'
                    type='number'
                />
                <FormItem
                    id='price'
                    label='Price'
                    placeholder='0.00'
                    type='number'
                />
                <SubmitButton>Add item</SubmitButton>
            </FormWrapper>
        </>
    )
}

export default ListForm;