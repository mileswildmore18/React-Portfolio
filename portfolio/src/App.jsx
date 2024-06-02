//These import all of the JS files that will be featured on the portfolio along with the react routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Navigation'
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/" component={Portfolio} />
        <Route path="/" component={Contact} />
        <Route path="/" component={Resume} />
      </Switch>
    
      <Navigation />
      <Footer />
      

    </Router>

  )
}

export default App;