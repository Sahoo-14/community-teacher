import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/StudentsPage';
import EditStudentPage from './pages/EditStudentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/edit/:id" element={<EditStudentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
