//These import all of the JS files that will be featured on the portfolio along with the react routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '/components/Nav';
import Header from '/components/Header';
import About from '/components/About';
import Portfolio from '/components/Portfolio';
import Contact from '/components/Contact';
import Resume from '/components/Resume';

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
    
      <Navbar />
      <Footer />
      

    </Router>

  )
}

export default App;