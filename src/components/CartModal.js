import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";

import { addProduct, removeProduct, resetCart } from "../store/cartSlice";
import classes from "./CartModal.module.css";
import { sendOrder } from "../api/OrderAPI";
import useHttp from "../hooks/use-http";

const CartModal = ({ setIsOpen, setNoti }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isContactShow, setIsContactShow] = useState(false);

  const { sendRequest, status, error } = useHttp(sendOrder)

  const closeModal = () => {
    setIsOpen(false);
  };

  const addOnClickHandler = (product) => {
    dispatch(addProduct(product));
  };

  const removeOnClickHandler = (pid) => {
    dispatch(removeProduct(pid));
  };

  const inputNameRef = useRef();
  const inputPhoneRef = useRef();
  const inputAddressRef = useRef();

  const submitOrder = async (e) => {
    e.preventDefault();
    const order = {
      products: cart.products,
      contact: {
        name: inputNameRef.current.value,
        phone: inputPhoneRef.current.value,
        address: inputAddressRef.current.value,
      },
      date: Date.now(),
      amount: cart.amount,
      status: "pending",
    };

    await sendRequest(order)
    dispatch(resetCart())
    if(error) {
      setNoti(error)
    } else {
      setNoti('Successfully sent the order.')
    }
    setIsOpen(false)
  };

  const addContactHandler = () => {
    setIsContactShow(true);
  };

  const productBoxes = cart.products.map((product) => (
    <div key={product.id} className={classes.productBox}>
      <p className={classes.name}>{product.name}</p>
      <div className={classes.actions}>
        <button onClick={removeOnClickHandler.bind(null, product.id)}>-</button>
        <span className={classes.quantity}>{product.quantity}</span>
        <button onClick={addOnClickHandler.bind(null, product)}>+</button>
      </div>
      <p className={classes.amount}>{product.quantity * product.price}</p>
    </div>
  ));

  const totalAmount = (
    <div className={classes.totalAmount}>
      <p className={classes.text}>Total amount</p>
      <p className={classes["total-amount"]}>{cart.amount}</p>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.darkBG} onClick={closeModal} />
      <div className={classes["modal-container"]}>
        <header>
          <h2>You Cart</h2>
          <button onClick={closeModal} className={classes.close}>
            close
          </button>
        </header>
        {cart.products.length <= 0 && <p>Nothing is here!!</p>}
        {cart.products.length > 0 && (
          <main>
            <section className={classes.productBoxes}>{productBoxes}</section>
            {totalAmount}
            {!isContactShow && (
              <button
                onClick={addContactHandler}
                className={classes.btnAddContact}
              >
                Add Contact
              </button>
            )}
            {isContactShow && (
              <section className={classes.contact}>
                <h3>Contact</h3>
                <form onSubmit={submitOrder}>
                  <div>
                    <label htmlFor="name">Your Name</label>
                    <input ref={inputNameRef} type="text" id="name" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input ref={inputPhoneRef} type="number" id="phone" required />
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <textarea ref={inputAddressRef} id="address" required></textarea>
                  </div>
                  {status === 'sending' && <p>sending order</p>}
                  <button>send</button>
                </form>
              </section>
            )}
          </main>
        )}
      </div>
    </div>
  );
};

export default CartModal;
