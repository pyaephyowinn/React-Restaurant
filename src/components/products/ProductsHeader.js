import { Link } from "react-router-dom";

import classes from "./ProductsHeader.module.css";

const ProductsHeader = () => {
  return (
    <header className={classes.header}>
      <h2>Products</h2>
      <nav>
        <Link className={classes.btnNew} to="new">
          Add Product <span className={classes.iconPlus}>+</span>
        </Link>
      </nav>
    </header>
  );
};

export default ProductsHeader;
