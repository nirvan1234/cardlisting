import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Nav from "./components/nav";
import CardListing from "./components/CardListing";
import Data from "./components/List";
import { AppContext } from "./components/context";

function App() {
  const [selectedCard, setSelectedCard] = useState([]);
  // owner_id
  function getData(e) {
    const m = e - 1;
    let filteredData = Data.filter((c, index) => {
      return index === m;
    });
    console.log(filteredData);
    setSelectedCard(filteredData);
  }

  return (
    <>
      <AppContext.Provider value={{ selectedCard }}>
        <BrowserRouter>
          <Header />
          <Nav />
          <Routes>
            <Route path="/card" element={<Card fun={getData} />} />
          </Routes>
          <Routes>
            <Route path="/cardlisting" element={<CardListing />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
