import "./App.css";
import NavBar from "./components/NavBar";
import CustomRoutes from "./components/CustomRoutes";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <CustomRoutes />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
