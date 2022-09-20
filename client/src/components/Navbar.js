import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zap-inventory-1.png"
            style={{ height: "30px", width: "60px", marginLeft: "70px" }}
          />
          <h2
            style={{
              display: "inline-block",
              marginLeft: "20px",
              marginTop: "5px",
              fontStyle: "italic",
            }}
          >
            Flipkart
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            {currentUser ? (
              <div class="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    style={{
                      color: "white",
                      marginTop: "10px",
                      fontSize: "20px",
                    }}
                    className="fa fa-user"
                    aria-hidden="true"
                  ></i>{" "}
                  {currentUser.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  {currentUser.isAdmin ? (
                    <a className="dropdown-item" href="/admin">
                      Admin
                    </a>
                  ) : (
                    " "
                  )}

                  <li
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout <i class="fas fa-sign-out-alt"></i>
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/login"
                  style={{ marginTop: "5px" }}
                >
                  <LoginRoundedIcon style={{ marginRight: "5px" }} />
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartItems.length}>
                    <ShoppingCartIcon style={{ color: "white" }} />
                  </StyledBadge>
                </IconButton>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: "0.2px solid white",
    color: "white",
    fontSize: "13px",
  },
}));
