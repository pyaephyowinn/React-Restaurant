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

  return (
    <div className={classes.container}>

      {status === "sending" && <p>loading ...</p>}
      {data === -1 && <p>Product is not found. It may be removed.</p>}
      {error && <p>{error}</p>}

      <main>
        {status==='completed' && data !== -1 && <ProductDetailsComponent product={data} />}
      </main>
    </div>
  );
};

export default ProductDetails;
