import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {GardenProvider} from './contexts/GardenContext'
import {PlantProvider} from './contexts/PlantContext'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(  
    <BrowserRouter>
        <GardenProvider>
            <PlantProvider>
                <App />
            </PlantProvider>
        </GardenProvider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();