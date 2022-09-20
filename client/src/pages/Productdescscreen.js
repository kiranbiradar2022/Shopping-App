import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Productdescscreen() {
  const { id } = useParams();
  const productid = id;

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
              <h1>
                <b>{product.name}</b>
              </h1>
              <hr />
              <div className="text-center">
                <img src={product.image} className="img-fluid m-3 bigimg" />
              </div>
              <p className="para">{product.description}</p>
            </div>
          </div>

          <div className="col-md-6 text-left mt-3">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <h1>
                <b>Price : ₹ {product.price}</b>
              </h1>
              <hr />
              <h1>Select Quantity</h1>

              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>

              <hr />

              {product.countInStock > 0 ? (
                <button className="btn btn-dark" onClick={addtocart}>
                  <AddShoppingCartIcon style={{ marginRight: "5px" }} />
                  ADD TO CART
                </button>
              ) : (
                <div>
                  <h1>Out Of StocK</h1>
                  <button className="btn" disabled onClick={addtocart}>
                    <AddShoppingCartIcon />
                    ADD TO CART
                  </button>
                </div>
              )}
            </div>

            <hr />
          </div>
        </div>
      )}
    </div>
  );
}
