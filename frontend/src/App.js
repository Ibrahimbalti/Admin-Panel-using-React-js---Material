
import Headercomponents from "./components/header/Headercomponents";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <BrowserRouter >
    <Headercomponents/>
    <FooterComponent/>
    </BrowserRouter >
   
  );
}

export default App;
