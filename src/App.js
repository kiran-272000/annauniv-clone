import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
// import Css from "./Pages/dummy/Css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Card>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Main />} />
      </Routes>
      <Footer />
    </Card>
  );
}

export default App;
