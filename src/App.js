import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
