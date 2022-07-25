import styled from "styled-components";
import Button from "../components/Button/Button";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormItem from "../components/FormItem/FormItem";
import {useContext, useState} from "react";
import ItemsContext from "../context/ItemsContext";

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
    const {addItem} = useContext(ItemsContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(title && quantity && price){
            addItem({
                title,
                quantity,
                price,
                listId
            })
        }
        navigate(`/list/${listId}`);
    }
    return(
        <>
            {navigate && <Navbar goBack={()=>navigate(-1)} title='Add Item'/>}
            <FormWrapper>
                <form onSubmit={handleOnSubmit}>
                    <FormItem
                        id='title'
                        label='Title'
                        placeholder='Insert Title'
                        value={title}
                        handleOnChange={(e)=>setTitle(e.currentTarget.value)}
                    />
                    <FormItem
                        id='quantity'
                        label='Quantity'
                        placeholder='0'
                        type='number'
                        handleOnChange={(e)=>setQuantity(e.currentTarget.value)}
                    />
                    <FormItem
                        id='price'
                        label='Price'
                        placeholder='0.00'
                        type='number'
                        handleOnChange={(e)=>setPrice(e.currentTarget.value)}
                    />
                <SubmitButton>Add item</SubmitButton>
                </form>
            </FormWrapper>
        </>
    )
}

export default ListForm;