import React, { useEffect, useState } from "react";
import "./render-product.css";
import { FaApple } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  qty: number;
  heading: string;
  des: string;
}
const products: Product[] = [
  {
    name: "Airpods Pro",
    price: 24900,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
    qty: 10,
    heading: "Wireless Noise Cancelling Earphones",
    des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
  },
  {
    name: "Apple Watch",
    price: 40900,
    imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
    qty: 15,
    heading: "You’ve never seen a watch like this",
    des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
  },
  {
    name: "Macbook Pro",
    price: 199900,
    imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
    qty: 20,
    heading: "The best for the brightest",
    des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
  },
  {
    name: "iPhone 11 pro",
    price: 106600,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    qty: 35,
    heading: "Pro cameras. Pro display. Pro performance",
    des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
  },
  {
    name: "iPad Pro",
    price: 71900,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
    qty: 25,
    heading: "Your next computer is not a computer",
    des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
  },
];
interface Props {
  addNewOrder: Function;
}
const ProductRender: React.FC<Props> = (props: Props) => {
  const [openContent, setOpenContent] = useState<boolean>(false);
  const [getId, setGetId] = useState<number>(NaN);
  const count: number = 0;
  const onMouseHover = () => {
    setOpenContent(true);
  };
  const onMouseOut = () => {
    setOpenContent(false);
  };
  const addToCart = (index: number, name: string) => {
    // const checkOrder: number = props.newOrder.findIndex((item:Product) => {
    //   return item.name == name;
    // });
    props.addNewOrder({
      ...products[index],
      qty: count + 1,
    });
  };
  return (
    <div className="table">
      {products.map((item, index) => {
        return (
          <div
            key={item.name}
            className="item-product"
            onMouseOver={onMouseHover}
            onMouseOut={onMouseOut}
          >
            <div className="header-product">
              <div className="icon-product">
                <FaApple />
              </div>
              <div className="price-product">
                <span>{item.price}</span>
              </div>
            </div>
            <div className="image-product">
              <img src={item.imageUrl} alt="product" />
            </div>
            <div className="name-product">
              <p>{item.name}</p>
              <span>
                <FaHeart />
              </span>
            </div>
            {openContent ? (
              <div className="content">
                <h3>{item.heading}</h3>
                <button onClick={() => addToCart(index, item.name)}>add</button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default ProductRender;
