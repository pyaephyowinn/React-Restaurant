import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { getProduct, updateProduct } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";
import classes from "./EditProduct.module.css";

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let product = location.state;

  const params = useParams();
  const { pid } = params;

  const { sendRequest, data, status } = useHttp(getProduct);

  useEffect(() => {
    if (!product) {
      sendRequest(pid);
    }
  }, [sendRequest, pid, product]);

  if (!product && data) product = data;
  
  const [pname, setPName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || 0);
  const [image, setIamge] = useState(product.image || "");
  const [category, setCategory] = useState(product.category || "");
  const [description, setDescription] = useState(product.description || "");
  
  const nameChangeHandler = (e) => {
    setPName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(+e.target.value);
  };
  const imageChangeHandler = (e) => {
    setIamge(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const { sendRequest: update } = useHttp(updateProduct);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name: pname,
      image,
      price,
      category: category.toLowerCase(),
      description,
    };

    await update(updatedProduct, product.id);
    navigate("/dashboard/products/" + product.id);
  };

  const cancelHandler = () => {
    navigate(-1)
  }

  return (
    <main className={classes.container}>
      {status === "sending" && <p>sending request</p>}

      <form onSubmit={submitFormHandler}>
        <h2>Edit Product</h2>
        <div className={classes["form-group"]}>
          <label htmlFor="name">Product Name</label>
          <input
            onChange={nameChangeHandler}
            value={pname}
            type="text"
            id="name"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="price">Price</label>
          <input
            onChange={priceChangeHandler}
            value={price}
            type="number"
            id="price"
            step={0.01}
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="image">Image Url</label>
          <input
            onChange={imageChangeHandler}
            value={image}
            type="text"
            id="image"
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="category">Category</label>
          <input
            onChange={categoryChangeHandler}
            value={category}
            type="text"
            id="category"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={descriptionChangeHandler}
            value={description}
            id="description"
          ></textarea>
        </div>
        <div className={classes.btnGroup}>
          <button onClick={cancelHandler} type="button" className={`${classes.btnCancel} ${classes.btn}`}>
            Cancel
          </button>
          <button type="submit" className={`${classes.btnSave} ${classes.btn}`}>
            Save changes
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProduct;
