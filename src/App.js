/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Countries from "./components/Countries";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div>
        <div className="flex mx-auto ">
          <SearchBar></SearchBar>
          <Dropdown></Dropdown>
        </div>
        <div className="container m-auto grid grid-cols-3">
          <Countries />
        </div>
      </div>
    </>
  );
}

export default App;
