import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './View/Home';
import About from './View/About';
import Featured from './View/Featured'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/about">
                <About />
              </Route>
              
              <Route path="/featured">
                <Featured />
              </Route>

          </Switch>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
