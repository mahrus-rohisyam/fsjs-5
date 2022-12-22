import React from "react";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import { Routes, Route } from "react-router-dom";
import Book from "./components/pages/Book";
import "./App.css"
import Playground from "./components/pages/Playground";
import Contact from "./components/pages/Contact";
import Fetch from "./components/pages/Fetch";

function App() {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<Home />} />
      <Route path="/fetch" element={<Fetch />}>
        <Route path=":id" />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/playground" element={<Playground />} />

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
