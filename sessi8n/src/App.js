import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Dj } from './Dj';
import { Albums } from './Albums';
import { News } from './News';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dj" component={Dj} />
              <Route path="/albums" component={Albums} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        
      </React.Fragment>
    );
  }
}



export default App;
