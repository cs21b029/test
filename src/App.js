import './App.css';
import { HashRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            {/* <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
