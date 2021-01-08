import 'react-app-polyfill/ie11';
import * as React from 'react';
import { configureApi } from 'react-reqq';
import { Provider } from 'react-redux';

import * as ReactDOM from 'react-dom';
import App from './App';

const store = configureApi({
  endpoint: '/',
});

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
