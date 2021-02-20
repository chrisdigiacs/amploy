import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/account' exact component={Account}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
