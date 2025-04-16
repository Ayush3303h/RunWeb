import React from 'react';
import App from './components/App.jsx';
import {Routes, Route} from 'react-router-dom';

export default function RunWeb() {
  return (
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
  )
}