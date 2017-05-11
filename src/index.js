import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/app'
import reducers from './reducers';

const store = applyMiddleware()(createStore);
const AppContainer = () => {
    return (
        <Provider store={store(reducers)}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<AppContainer />, document.querySelector('.container'));
