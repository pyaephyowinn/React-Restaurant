import { useParams } from "react-router-dom";
import { useEffect } from "react";

import classes from "./ProductDetails.module.css";
import { getProduct } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";
import ProductDetailsComponent from "../../components/products/ProductDetails";

const ProductDetails = () => {
  const params = useParams();
  const { pid } = params;

  const { sendRequest, data, error, status } = useHttp(getProduct);

  useEffect(() => {
    sendRequest(pid);
  }, [sendRequest, pid]);

  let isLoading;
  if (status === "sending") {
    isLoading = true;
  }

  if (status === "completed") {
    isLoading = false;
  }

  return (
    <div className={classes.container}>

      {isLoading && <p>loading ...</p>}
      {error && <p>{error}</p>}

      <main>{!!data && <ProductDetailsComponent product={data} />}</main>
    </div>
  );
};

export default ProductDetails;
