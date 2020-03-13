import 'semantic-ui-css/semantic.min.css'
import './App.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import rootReducer from './Reducers/RootReducer'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Vapor from './images/vaporware1.jpg'

import { Image } from 'semantic-ui-react'

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// const backGroundImage = {
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundImage: `url(${Vapor})`
// }

ReactDOM.render(
    <div>
      <Provider store={store} >
          <App />
      </Provider>
    </div>
    , 
    document.getElementById('root')
);
