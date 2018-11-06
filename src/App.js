import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comments from './Routes/Comments';
import StoriesList from './Routes/StoriesList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={StoriesList} />
          <Route path='/comments/' component={Comments} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
