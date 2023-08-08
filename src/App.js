// Styles
import "./App.css";
import ItemListContainer from "./components/Containers/ItemListContainer";

// Components
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="teacher" />
    </>
  );
}

export default App;
