// App.js
import React,{useState} from 'react';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css'; // Import the global CSS file

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />

      {isLoggedIn ? (
        <p>Welcome, User! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

export default App;