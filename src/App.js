import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import APropos from "./pages/APropos";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import data from "./Data/logements.json";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/logement/:id" element={<Logement data={data} />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
