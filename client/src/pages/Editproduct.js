import React from "react";
import { getProductById, updateProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Adminscreen from "./Adminscreen";

export default function Editproduct() {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);

  const { product, error, loading } = productstate;

  const updateproductstate = useSelector((state) => state.updateProductReducer);

  const { success, updateerror, updateloading } = updateproductstate;

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const { productid } = useParams();

  useEffect(() => {
    if (product) {
      if (product._id === productid) {
        setname(product.name);
        setprice(product.price);
        setdescription(product.description);
        setimageurl(product.image);
        setcategory(product.category);
        setcountinstock(product.countInStock);
      } else {
        dispatch(getProductById(productid));
      }
    } else {
      dispatch(getProductById(productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countinstock,
      category: category,
      image: imageurl,
    };

    dispatch(updateProduct(productid, updatedproduct));
  }

  return (
    <div>
      <Adminscreen />
      <h2>Edit Product</h2>
      {loading && <Loader />}

      {updateloading && <Loader />}
      {updateerror && <Error error="Something went wrong" />}
      {success && <Success success="Product Updated Successfully" />}
      {error && <Error error="something went wrong" />}
      {product && (
        <div>
          <form onSubmit={editproduct}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Price"
              value={price}
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Image Url"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="Count In Stock"
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
            <button
              className="btn mt-3"
              type="submit"
              style={{ float: "left", marginLeft: "10px" }}
            >
              Update Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
