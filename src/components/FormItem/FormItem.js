import styled from "styled-components";

const FormItemContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 10px 0;
`;

const Input = styled.input`
  flex-basis: 60%;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightgray;
`;

const FormItem = ({id, label, type='text', placeholder='', value, handleOnChange}) => {
    return(
        <FormItemContainer>
            <Label htmlFor={id}>{label}</Label>
            <Input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
        </FormItemContainer>
    )
}

export default FormItem;