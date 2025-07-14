import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep this for your general CSS
import App from './App';
import './style.css'; // Ensure this path matches where you put style.css
// import reportWebVitals from './reportWebVitals'; // DELETE THIS LINE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); // DELETE OR COMMENT OUT THIS LINE