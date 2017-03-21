import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { AppContainer } from 'react-hot-loader';
//styles
import '../stylesheets/main.scss';

const app = document.getElementById('app');


function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <AppRoute />
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('./routes.js', renderApp);
}