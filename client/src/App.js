import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./pages/Homescreen";
import Productdescscreen from "./pages/Productdescscreen";
import Cartscreen from "./pages/Cartscreen";
import Registerscreen from "./pages/Registerscreen";
import Loginscreen from "./pages/Loginscreen";
import Ordersscreen from "./pages/Ordersscreen";
import Profilescreen from "./pages/Profilescreen";
import Adminscreen from "./pages/Adminscreen";
import Userslist from "./pages/Userslist";
import Orderslist from "./pages/Orderslist";
import Addproduct from "./pages/Addproduct";
import Editproduct from "./pages/Editproduct";
import Productslist from "./pages/Productslist";
import Orderinfo from "./pages/Orderinfo";

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
          <Route path="/orderinfo/:orderid" element={<Orderinfo />} />
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
