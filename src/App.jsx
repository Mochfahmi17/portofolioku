import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/portfolio" Component={PortfolioPage} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
