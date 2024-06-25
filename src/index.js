import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadComponent from './compnents/head/Head';
import CenterComponent from './compnents/center/Center';
import "./index.css"
function App() {
  return (
    <div className='container'>
      <HeadComponent />
      <CenterComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

