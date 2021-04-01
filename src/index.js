import React from 'react';
import ReactDOM from 'react-dom';
import Request from './utils/Axios';
import Axios from 'axios';
import './index.less';
import Router from './router/router.jsx';
import reportWebVitals from './reportWebVitals';
import './utils/rem';

/* 兼容苹果X的刘海问题 */
let viewport = document.querySelector('meta[name="viewport"]');
if (viewport)viewport.setAttribute('viewport-fit', 'contain');

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
};
Request(Axios);
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
