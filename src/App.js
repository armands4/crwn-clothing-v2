import Home from "./routes/home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign-in/Sign-in.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
