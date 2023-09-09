import NavRoutes from "./components/UI/NavRoutes.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import navRoutes from "./utils/nav-routes.js";

function App() {
  return (
    <div dir="rtl" className="w_100 p-1 d-flex flex-column align-items-center justify-content-center text-center gap-1">
      <Header />
      <NavRoutes navRoutes={navRoutes} />
      <Footer />
    </div>
  );
}

export default App;
