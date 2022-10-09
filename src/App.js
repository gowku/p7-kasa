// import logo from "./logo.svg";
// import "./App.css";
// import img from "./asset/acceuilimg.jpg";

import { Route, Routes } from "react-router-dom";
import APropos from "./pages/APropos";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

function App(props) {
  console.log(props.data[0]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement" element={<Logement />} />
      <Route />
      <Route />
    </Routes>
  );

  // return <Home />;
  // return <Logement />;
  // return <NotFound />;
  // return <APropos />;
}

export default App;
