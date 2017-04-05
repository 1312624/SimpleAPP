import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { AppContainer } from 'react-hot-loader';
import configureStore from './Store/configureStore';
import { Provider } from 'react-redux';

//styles
import '../stylesheets/main.scss';

const app = document.getElementById('app');
const store = configureStore();

function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store} >
                <AppRoute />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('./routes.js', renderApp);
}