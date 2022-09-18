import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div className="home">
      <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-3 ml-2" style={{ marginTop: "13px" }}>
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="form-control"
          />
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">fashion</option>
            <option value="mobiles">Mobiles</option>
          </select>
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <button
            className="btn"
            onClick={() => {
              dispatch(filterProducts(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
