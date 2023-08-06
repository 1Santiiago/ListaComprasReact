import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Item from "../ItemRender/Item";
import * as c from "./style";
import { ButtonStyled } from "../Form/style";
import { Input } from "../Form/style";
function Home() {
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const editItem = (itemId, newName) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
    setEditItemId(null); 
  };
  return (
    <>
      <c.Container>
        <Header />
      </c.Container>
      <c.Board>
        <Form addItem={addItem} />
      </c.Board>
      <c.Container>
  
        <Item items={items} onDeleteItem={deleteItem} onEditItem ={setEditItemId} />

        {editItemId !== null && (
        <div>
          <h3>Editar Item</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newName = e.target.elements.itemName.value;
              editItem(editItemId, newName);
            }}
          >
            <Input type="text" name="itemName" placeholder="Novo nome" />
            <ButtonStyled type="submit">Salvar</ButtonStyled>
          </form>
        </div>
      )}
      </c.Container>
    </>
  );
}

export default Home;
