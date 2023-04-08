import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import pages
import Home from "./pages/Home";

// import components 
import Navbar from "./components/Navbar";
import Singlecocktail from './pages/Singlecocktail';

function App() {
  

  return (
    <div className="App">
      <Router>
       <Navbar />
       <Routes>
        <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/about'> 
           <About />
          </Route>
          <Route path='/cocktail/:id'>
            <Singlecocktail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
       </Routes>
      </Router>
    </div>
  )
}

export default App;
