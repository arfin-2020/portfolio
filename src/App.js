import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import About from './components/About/About';
import Project from './components/Home/Project/Project';
import Blogs from './components/Home/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
          <ContactForm/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/project">
          <Project/>
        </Route>
        <Route exact path="/blogs">
          <Blogs/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
