import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Topbar from '../components/Layout/Topbar';
import { Carousel } from 'react-responsive-carousel';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <h2>Quick Stats</h2>
        
        <div className="carousel-container">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src="https://via.placeholder.com/600x200?text=Student+Progress" alt="Progress" />
              <p className="legend">Track Student Progress</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/600x200?text=Upcoming+Events" alt="Events" />
              <p className="legend">Upcoming Events</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/600x200?text=Performance+Reports" alt="Reports" />
              <p className="legend">Performance Reports</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
