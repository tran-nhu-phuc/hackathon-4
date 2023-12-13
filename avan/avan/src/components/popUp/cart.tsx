import React, { useState } from "react";
import "./cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "../product/render-product";
interface Props {
  newOrder: Product[];
  deleteTodo: Function;
  deleteAll: Function;
}
const Cart: React.FC<Props> = (props: Props) => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(NaN);
  const openPupUpTable = () => {
    setOpenPopUp(true);
  };
  const closePupUpTable = () => {
    setOpenPopUp(false);
  };
  const totalAmount = props.newOrder.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const minusDown = () => {};
  return (
    <div>
      <div className="header-cart">
        <button className="btn-cart">
          <span>{props.newOrder.length}</span>
          <button onClick={openPupUpTable}>
            .<FaShoppingCart />
          </button>
        </button>
      </div>
      {openPopUp ? (
        <div className="pop-up">
          <div className="box-pop-up">
            <div className="table-pop-up">
              <div className="header-pop-up">
                <h2>Shopping Cart</h2>
                <span className="close-pop-up" onClick={closePupUpTable}>
                  x
                </span>
              </div>
              <div className="list-pop-up">
                {props.newOrder.map((item, index) => {
                  return (
                    <div className="item-pop-up">
                      <div className="image">
                        <img src={item.imageUrl} alt="product" />
                      </div>
                      <div className="cherry">
                        <button className="minus">-</button>
                        <span>{item.qty}</span>
                        <button className="plus">+</button>
                      </div>
                      <div className="price-cart">{item.price}</div>
                      <div className="close">
                        <button onClick={() => props.deleteTodo(item.name)}>
                          x
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="payment">
                <span>Total Price : {totalAmount}</span>
                <button onClick={() => props.deleteAll()}>Payment</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Cart;
