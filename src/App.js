
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import SignUp from './component/SignUp';
import Account from './component/EmployeeAccount';
import Navbar from './components/Navbar'

import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import EmployerSignUp from './components/EmployerSignUp';
import Account from './pages/Account';
import Cards from './components/Cards';


function App() {
 
  return (

   <Router>
      <div className="App">
      <Navbar />
      
          <Route path = '/' exact component={Login}/>
           <Switch>
        <Route path='/cards' exact component={Cards}/>
        <Route path='/account' exact component={Account}/>
          </Switch>
    
          <Route path = '/SignUp' exact component={SignUp}/>

      </div>
    </Router>
    
  );
}

export default App;
