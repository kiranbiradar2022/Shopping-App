import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginReducer);

  const currentUser = userstate.currentUser;

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.isAdmin) {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-2 ">
        <div className="col-md-10 div">
          <h2>Admin Panel</h2>
          <ul className="admin p-2 div">
            <li>
              <Link to="/admin/userslist" style={{ color: "black" }}>
                UsersList
              </Link>
            </li>
            <li>
              <Link to="/admin/productslist" style={{ color: "black" }}>
                Products List
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewproduct" style={{ color: "black" }}>
                Add New Product
              </Link>
            </li>
            <li>
              <Link to="/admin/orderslist" style={{ color: "black" }}>
                Orderslist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
