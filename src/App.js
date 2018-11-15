import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comments from './views/comments';
import StoriesList from './views/storiesList';
import { Provider } from 'react-redux';
import { store } from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={StoriesList} />
            <Route path='/comments/:id' component={Comments} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
