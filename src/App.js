import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/client/Home'
import About from './components/client/About';
import Contact from './components/client/Contact';
import Login from './components/client/Login';
import Register from './components/client/Register';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
