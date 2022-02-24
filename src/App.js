//once npm starts we only see the code written in App.js file
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

//variable

function App() {
  return (
    //JSX Fragment starts here --- from here()

    <>
      {/* Navbar.js modules, once we write Nabar here, app.js file will automatically import Navbar component from Navbar.js module 
      Here Navbar is a components and title & aboutText are its properties/variables which we are passing with the help of props and deciding 
      that what value we have to give to these properties for e.g title = 'text_utils3'
      we can  pass anything with the help of props. it could be an object, link, integer, string blah blah*/
      }
      <Navbar title = 'text_utils3' aboutText = 'About1' />
      {/* <Navbar/> */}
      {/*my-3 class of container give little margin from the other component*/}
      <div className="container my-3">
        <TextForm heading = 'Enter text to analyze below'/>
        {/* <About/> */}
        </div>
      
    </>
    //JSX --- end here
  );
}

export default App;
