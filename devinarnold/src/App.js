import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import computer from './Components/images/Computer.jpg'
import './App.css';

function App() {
  return (

    <Router>
    <div className = 'app' style = {{ backgroundImage: "url("+computer+")"}}>
      <div className = 'WelcomeContainer'>
       <h2 className = 'name'>Devin Arnold</h2>
        <h1 className = 'WelcomeTitle'> Developer / Designer</h1>
        <Link className = 'link' to = '/'> </Link>
        </div>

    <Switch>
      {/* <Route exact path ='/' render={(props)=><Welcome {...props}/>}/> */}
      {/* <Route path= '/about' render ={(props)=><LandlordPage{...props}/>}/>
      <Route path= '/portfolio' render ={(props)=><TenantPage{...props}/>}/>
      <Route component={AppNotFound}/> */}
    </Switch>
    </div>
    </Router>
  );
}

export default App;
