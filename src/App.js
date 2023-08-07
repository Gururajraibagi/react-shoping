import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Route/home/home.component";
import Navbar from "./components/Route/navigation/Navbar.component";
import SignIn from "./components/Route/signin/signin.component";
import SignUpForm from "./components/Route/sign-up-form/sign-up-form.component";
import Authentication from "./components/authentication/authentication.component";

const App = () => {
  const Shop = () => {
    return <h1>Im shop</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        <Route path="auth" element={<Authentication />} />
        <Route path="signIn" element={<SignIn />} />

        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
