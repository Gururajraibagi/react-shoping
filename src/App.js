import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Route/home/home.component";
import Navbar from "./components/Route/navigation/Navbar.component";
import SignIn from "./components/signin/signin.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Authentication from "./components/authentication/authentication.component";
import Shop from "./components/Route/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        <Route path="auth" element={<Authentication />} />
        <Route path="signIn" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
