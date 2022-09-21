import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../actions/productActions";
import Adminscreen from "./Adminscreen";

export default function Productslist() {
  const dispatch = useDispatch();
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products, loading, error } = getallproductsstate;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Adminscreen />
      <h2 className="div">Products list</h2>

      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>{product._id}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{
                        marginRight: "10px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    ></i>
                    <Link to={`/admin/editproduct/${product._id}`}>
                      <i className="fas fa-edit" style={{ color: "black" }}></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
