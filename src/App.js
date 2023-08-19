// Routing
import { BrowserRouter } from "react-router-dom"

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
