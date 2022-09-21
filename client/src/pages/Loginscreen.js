import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Loginscreen() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  function login(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    dispatch(loginUser(user));
  }

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="login">
      <div className="row justify-content-center">
        <div
          className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded"
          style={{ marginTop: "100px" }}
        >
          <div className="div">
            <h2 className="text-center m-2" style={{ display: "inline" }}>
              LOGIN
            </h2>
            <i
              style={{ fontSize: "25px", marginLeft: "7px" }}
              className="fa fa-sign-in"
              aria-hidden="true"
            ></i>

            {error && <Error error="Invalid Credentials" />}
            {loading && <Loader />}

            <form onSubmit={login}>
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <div className="div">
                <button type="submit" className="btn mt-3">
                  Login
                </button>
              </div>
            </form>
          </div>

          <a href="/register" className="mt-3 reg div">
            Click Here To Register
          </a>
        </div>
      </div>
    </div>
  );
}
