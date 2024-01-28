import "./App.css";
import NavBar from "./components/NavBar";
import CustomRoutes from "./components/CustomRoutes";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="App container">
      <Scroll />
      <NavBar />
      <CustomRoutes />
      <Footer />
    </div>
  );
}

export default App;
