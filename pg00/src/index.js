import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Suspense} from 'react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
       
       
         <Suspense fallback={<p>Cargando...</p>}>
    <App />
    </Suspense>


  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
