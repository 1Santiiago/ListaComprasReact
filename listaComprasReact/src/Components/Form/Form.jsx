import { useState } from "react";
import * as c from "./style";

function Form( {addItem } ) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name: inputValue };
    addItem(newItem);
    setInputValue('');
  };

  return (
    <c.Form onSubmit={handleSubmit}>
      <c.Wrapper>
        <c.Input
          type="text"
          name="item"
          placeholder="Adicione um item: "
          value={inputValue}
          onChange={handleChange}
          required
        />
        <c.ButtonStyled type="submit">Adicionar</c.ButtonStyled>
      </c.Wrapper>
    </c.Form>
  );
}

export default Form;
