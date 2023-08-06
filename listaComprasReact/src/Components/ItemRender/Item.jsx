import * as c from "./style";
import { ButtonStyled } from "../Form/style";
function Item({ items, onDeleteItem, onEditItem }) {
  return (
    <div>
      <c.Container>
      {items.map((item) => (
          <c.Wrapper key={item.id}>
            <c.Span>{item.name}</c.Span>
            <ButtonStyled onClick={() => onEditItem(item.id)}>Editar</ButtonStyled>
            <ButtonStyled onClick={() => onDeleteItem(item.id)}>Excluir</ButtonStyled>
          </c.Wrapper>
          ))}
        </c.Container>
  </div>
  );
}

export default Item;
