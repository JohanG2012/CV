import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['EB Garamond']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
