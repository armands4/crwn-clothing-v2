import Home from "./routes/home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/sign-in/Authentication";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
