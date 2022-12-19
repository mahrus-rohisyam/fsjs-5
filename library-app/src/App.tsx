import React from "react";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import { Routes, Route } from "react-router-dom";
import Book from "./components/pages/Book";
import "./App.css"

function App() {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<Home />} />

      {/* Dynamic Route */}
      <Route path="/books" element={<Book />}>
        <Route path=":id" />
      </Route>

      {/* Handling Error path */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
