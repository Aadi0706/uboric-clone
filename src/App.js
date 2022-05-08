import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Categories } from "./comoponent/Categories";
import { Footer } from "./comoponent/Footer";
import { Home } from "./comoponent/Home";
import { Login } from "./comoponent/Login";
import { Marchent } from "./comoponent/Marchent";
import { Navbar } from "./comoponent/Navbar";
import { Seller } from "./comoponent/Seller";
import { UboricRoutes } from "./comoponent/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Merchant" element={<Marchent />}></Route>
        <Route path="/Seller" element={<Seller />}></Route>
      </Routes>
        <UboricRoutes />

      <Footer />
    </div>
  );
}

export default App;
