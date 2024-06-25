import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadComponent from './compnents/head/Head';
import "./index.css"
function App() {
  return (
    <div className='container'>
      <HeadComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

