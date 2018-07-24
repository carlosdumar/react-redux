import React from 'react'
import { render } from 'react-dom';

//import data from '../api.json';

import Home from '../pages/containers/home';
// import data from '../schemas/index';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

//console.log(normalizedData);
//console.log(data);

// const initialState = {
//     data: {
//         entities: data.entities,
//         categories: data.result.categories,
//         search: [],        
//     },
//     modal: {
//         visibility: false,
//         mediaId: null
//     }
// }
const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');


render (
    <Provider store={store}>
        <Home />
    </Provider>
    , homeContainer);