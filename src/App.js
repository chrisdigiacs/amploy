import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import SignUp from './component/SignUp';

function App() {
 
  return (
   <Router>
      <div className="App">
      
          <Route path = '/' exact component={Login}/>
          <Route path = '/Home' exact component={Home}/>
          <Route path = '/SignUp' exact component={SignUp}/>

        
      </div>
    </Router>
  );
}

export default App;
