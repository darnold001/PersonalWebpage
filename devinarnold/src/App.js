import React from 'react';
import Hamburger from './Components/HamburgerButton'
import computer from './Components/images/CODE.jpg'
import './App.css';

function App() {


  return (

    
    <div className = 'app' style = {{ backgroundImage: "url("+computer+")"}}>
      <div className = 'WelcomeContainer'>
       {/* <h2 className = 'name'>Devin Arnold</h2> */}
        <h1 className = 'WelcomeTitle'> Developer / Designer</h1>
        <Hamburger className = 'hamburger'></Hamburger>
        </div>
    </div>

  );
}

export default App;
