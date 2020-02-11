import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// PEGAR OS COMPONEMTES QUE ESTÃO NO "App"
// e jogando no "root" que está dentro do "index.html" pasta public.
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
