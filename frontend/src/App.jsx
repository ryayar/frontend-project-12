import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Главная страница</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
