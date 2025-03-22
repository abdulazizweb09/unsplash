import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { Provider } from 'react-redux';
import { store } from './hooks/store.js';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-right" />
    </BrowserRouter>
  </Provider>
);
