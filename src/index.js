import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store from './store';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter basename="/clean-chat">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

