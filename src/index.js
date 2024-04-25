import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Project } from './pages/Project/Project';
import { Homepage } from './pages/Homepage/Homepage';
import { Range } from './pages/Range/Range';
import { Contacts } from './pages/Contacts/Contacts';
import { Working } from './pages/Working/Working';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/range" element={<Range />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/working" element={<Working />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
