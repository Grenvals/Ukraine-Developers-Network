import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { SocialNetworkApp } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SocialNetworkApp />, document.getElementById('root'));

serviceWorker.unregister();
