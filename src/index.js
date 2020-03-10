import 'semantic-ui-css/semantic.min.css'

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

const backGroundImage = {
  height: '1000px',
  // width: '1200px',
  width: '100%',
  backgroundImage: `url(${Vapor})`

}


// ReactDOM.render(
//   <Image 
//     src={ Vapor }
//   >
//     <Provider store={store} >
//         <App />
//     </Provider>
//   </Image>
//   , 
//   document.getElementById('root')
// );

ReactDOM.render(
    <div 
      // style={{backgroundColor: "#F6BB42"}}
      style={ backGroundImage }
    >
      <Provider store={store} >
          <App />
      </Provider>
    </div>
    , 
    document.getElementById('root')
);
