// Styles
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

// Components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="teacher" />
    </>
  );
}

export default App;
