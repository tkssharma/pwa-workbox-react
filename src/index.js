import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { LocalStorageService } from './cache/localStorage';
const data = LocalStorageService.getItem('employee') || [];

ReactDOM.render(<App employeeData={data} />, document.getElementById('root'));
registerServiceWorker();
