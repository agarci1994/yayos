import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

/* ----- RRD components ----- */
import App from './App';

/* ----- CSS ----- */
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Router>
    <App />
</Router>, document.getElementById('root'));

