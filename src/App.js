import React from "react";
import './App.css';
import Home from '../src/StyleReact/Home/Home'
import Header from "./StyleReact/Header/Header";
import Footer from "./StyleReact/Footer/Footer";
import Header2 from "./StyleReact/Header2/Header2";
import Header3 from "./StyledComponent/Header3/Header3";

function App() {
 
  return (
    <div className="App">
      <h1>Style React and SASS Intro</h1>
      {/* <Header></Header> */}

      <Header3></Header3>

      <Header2></Header2>
      <Home></Home>
      <Footer></Footer>

    </div>
  );
}

export default App;
