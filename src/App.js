import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducer from './reducers';
import XenSparkleMainContainer from './containers/XenSparkleMainContainer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: createStoreWithMiddleware(reducer),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <XenSparkleMainContainer />
      </Provider>
    );
  }
}

export default App;
