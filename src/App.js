import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate';
import Login from './components/Login';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            <Authenticate />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
