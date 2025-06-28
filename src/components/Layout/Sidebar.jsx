import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';  

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Teacher Dashboard</h2>
      <ul>
        <li onClick={() => navigate('/')}>Dashboard</li>
        <li onClick={() => navigate('/students')}>Students</li>
      </ul>
    </div>
  );
};

export default Sidebar;
