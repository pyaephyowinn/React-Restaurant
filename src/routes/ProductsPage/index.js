import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./index.module.css";
import { getProducts } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";
import Header from "../../components/UI/Header";
import CartModal from "../../components/CartModal";
import Notification from "../../components/UI/Notification";

import { addProduct } from "../../store/cartSlice";

const ProductsPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const searchTextChgHandler = (e) => {
    let name = e.target.value.toLowerCase();
    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  const addToCartHandler = (product) => {
    dispatch(addProduct(product));
  };

  const { sendRequest, data, error, status } = useHttp(getProducts);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let productList = data || [];

  const inputName = searchParams.get("name") || "";

  if (inputName) {
    productList = productList.filter((product) =>
      product.name.toLowerCase().includes(inputName.trim())
    );
  }

  const productBoxes = productList.map((product) => (
    <div key={product.id} className={classes.productBoxes}>
      <img
        src={
          product.image ||
          "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg"
        }
        alt={product.name}
      />
      <div className={classes.description}>
        <p className={classes.productName}>{product.name}</p>
        <p>{product.description || "description is not added"}</p>
      </div>
      <div className={classes.actions}>
        <p>MMK {product.price}</p>
        <button onClick={addToCartHandler.bind(null, product)} type="button">
          +
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      {notification.length > 0 && (
        <Notification close={setNotification} text={notification} />
      )}
      <div className={classes.container}>
        {isCartOpen && <CartModal setIsOpen={setIsCartOpen} setNoti={setNotification} />}
        <main>
          <section className={classes.options}>
            <input
              type="text"
              onChange={searchTextChgHandler}
              value={inputName}
              placeholder="search by name"
            />
          </section>
          <section className={classes["grid-container"]}>
            {status !== "completed" && <p> Loading...</p>}
            {error}
            {productBoxes}
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
