import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creat from "./componemts/Creat";
import Read from "./componemts/read";
import Update from "./componemts/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>My Form App</h1> {/* Move this outside <Routes> */}
        <Routes>
          <Route exact path="/" element={<Creat />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update/:id" element={<Update />} /> {/* Update route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
