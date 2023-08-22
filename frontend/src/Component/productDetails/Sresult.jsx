import React from "react";
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";
import "./sresult.css";

const Sresult = () => {
  const { products } = useSelector((state) => state.searchProduct);
  const options = {
    value: 3,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="wraper">
      {products &&
        products.map((product) => (
          <div className="productCard">
            <img src={product.images[0].url} alt={product.name} />

            <p>{product.name}</p>
            <div>
              <Rating {...options} />
              <span className="productCardSpan">
                ({product.numOfReviews} Reviews)
              </span>
            </div>
            <p>{product.description}</p>
            <span>{`₹${product.price}`}</span>
          </div>
        ))}
    </div>
  );
};

export default Sresult;
