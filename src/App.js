import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { GlobalStyle } from "./global.styles";
import { useContext } from "react";
import { UserContext } from "./contexts/user-context";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={ currentUser? <Navigate replace to= '/' /> : <Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
    </>

  );
};

export default App;
