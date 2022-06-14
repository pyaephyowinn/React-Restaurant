import { useEffect } from "react";

import classes from './Products.module.css'
import ProductsHeader from "../../components/products/ProductsHeader";
import { getProducts } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";
import Product from "../../components/products/Product";

const Products = () => {
  const { sendRequest, data, error, status } = useHttp(getProducts)

  useEffect( () => {
    sendRequest()
  }, [sendRequest])

  let isLoading;
  if(status === 'sending') {
    isLoading = true
  }

  if(status === 'completed') {
    isLoading = false
  }

  return (
    <div className={classes.container}>
      <ProductsHeader />
      {isLoading && <p>loading ...</p>}
      {error && <p>{error}</p>}
      <div className={classes.gridContainer}>
        {data?.map(product => <Product key={product.id} refreshPage={sendRequest} product={product} />)}
      </div>
    </div>
  );
};

export default Products;
