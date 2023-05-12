import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";

import ItemDetailContainer from "./Components/Products/ItemDetailContainer";
import UseArrayCart from "./context/useArrayCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UseArrayCart>
          <NavBar />
          <ItemDetailContainer />
        </UseArrayCart>
      </BrowserRouter>
    </>
  );
};

export default App;
