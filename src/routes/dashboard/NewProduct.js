import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./NewProduct.module.css";
import { addProduct } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";

const NewProduct = () => {
  const navigate = useNavigate();

  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const inputImageRef = useRef();
  const inputCategoryRef = useRef();
  const inputDescriptionRef = useRef();

  const { sendRequest, data: pid, status } = useHttp(addProduct);

  useEffect(() => {
    if (pid) {
      navigate(`/dashboard/products/${pid}`);
    }
  }, [navigate, pid]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const name = inputNameRef.current.value;
    const price = +inputPriceRef.current.value;
    const image = inputImageRef.current.value;
    const category = inputCategoryRef.current.value;
    const description = inputDescriptionRef.current.value;

    const product = {
      name,
      price,
      image,
      category: category.toLowerCase(),
      description,
    };
    sendRequest(product);
  };

  const cancelHandler = () => {
    navigate(-1)
  }

  return (
    <main className={classes.container}>
      <h2>Add New Product</h2>
      {status === "sending" && <p>sending request</p>}

      <form onSubmit={submitFormHandler}>
        <div className={classes["form-group"]}>
          <label htmlFor="name">Product Name</label>
          <input ref={inputNameRef} type="text" id="name" required />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="price">Price</label>
          <input ref={inputPriceRef} type="number" id="price" step={0.01} required />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="image">Image Url</label>
          <input ref={inputImageRef} type="text" id="image" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="category">Category</label>
          <input ref={inputCategoryRef} type="text" id="category" required />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="description">Description</label>
          <textarea ref={inputDescriptionRef} id="description"></textarea>
        </div>
        <div className={classes.btnGroup}>
          <button
            onClick={cancelHandler}
            type="button"
            className={`${classes.btnCancel} ${classes.btn}`}
          >
            Cancel
          </button>
          <button className={`${classes.btnAdd} ${classes.btn}`}>Add Product</button>
        </div>
      </form>
    </main>
  );
};

export default NewProduct;
