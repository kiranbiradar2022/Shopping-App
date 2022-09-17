import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import Userslist from "./screens/Userslist";
import Orderslist from "./screens/Orderslist";
import Addproduct from "./screens/Addproduct";
import Editproduct from "./screens/Editproduct";
import Productslist from "./screens/Productslist";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/product/:id" element={<Productdescscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin/*" element={<Adminscreen />} />
          <Route path="/admin/" element={<Userslist />} />
          <Route path="/admin/userslist" element={<Userslist />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/addnewproduct" element={<Addproduct />} />
          <Route path="/admin/productslist" element={<Productslist />} />
          <Route
            path="/admin/editproduct/:productid"
            element={<Editproduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
