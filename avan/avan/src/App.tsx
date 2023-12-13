import React, { useState } from "react";
import "./App.css";
import ProductRender, { Product } from "./components/product/render-product";
import Cart from "./components/popUp/cart";
function App() {
  const [newOrder, setNewOrder] = useState<Product[]>([]);
  const addNewOrder = (order: Product): void => {
    setNewOrder((prev: Product[]) => [...prev, order]);
  };
  const deleteTodo = (name: string): void => {
    const newTodo = newOrder.filter((item) => item.name != name);
    setNewOrder(newTodo);
  };
  const deleteAll = () => {
    alert("thank you for payment");
    setNewOrder([]);
  };
  const orderDown = (orderNew: Product[]) => {
    setNewOrder(orderNew);
  };
  return (
    <div className="App">
      <Cart newOrder={newOrder} deleteTodo={deleteTodo} deleteAll={deleteAll} />
      <ProductRender addNewOrder={addNewOrder} />
    </div>
  );
}

export default App;
