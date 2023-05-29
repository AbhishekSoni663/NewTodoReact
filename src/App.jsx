import React from "react";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import Navbar from "./Components/Navbar";
import { GlobalProvider } from "./context/GlobalContext";



 

function App() {
  return (
    <GlobalProvider>
      <Navbar/>
      <div className="hero" id="">
        <div className="container">
          <Form />
          <ListGroup />
        </div>
      </div>
     
    </GlobalProvider>
  );
}

export default App;
