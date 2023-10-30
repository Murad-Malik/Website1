import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; 
import Home from './Home'; 
import About from './About'; 
import Contact from './Contact'; 
import Navbar from './Navbar'; // 
import Risk from './Risk'; // 
import AccountService from './AccountService'; // 

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> 
      </Router>
    </>
  );
}

function ContactPage() {
  return (
    <div className="App">
      <header className="App-header">
        <section id="section1">
          <h2> Contact Information</h2>
          <a
            className="App-link"
            href="https://www.facebook.com/people/WAK-Accounting/100091477247683/?paipv=0&eav=AfZXAfG_QREWcQ7Tcp4HU8dEYpAxeMWg5BiqRPTUrwskHkzqRW9mSSA3HeZGHCaCbrc&_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to facebook page
          </a>
          <p> Phone Number: </p>
          <p> Email: </p>
          <p> i want to add icons instead of the words to this section </p>
        </section>
      </header>
    </div>
  );
}

export default App; 