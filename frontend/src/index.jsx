import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SocketContext, socketService } from './utils/socketService.js';

const initializeApp = () => {
  socketService.connect();

  return (
    <SocketContext.Provider value={socketService}>
      <App />
    </SocketContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(initializeApp());