import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import APropos from "./pages/aPropos/APropos";
import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement";
import NotFound from "./pages/notFound/NotFound";
import data from "./Data/logements.json";

function App() {
  // console.log(data);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/logement/:id" element={<Logement data={data} />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/404-notFound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404-notFound" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
