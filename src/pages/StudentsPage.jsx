import React, { useState } from 'react';
import StudentList from '../components/Students/StudentList';
import Sidebar from '../components/Layout/Sidebar';
import Topbar from '../components/Layout/Topbar';

const StudentsPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: '10', academicData: 'Good performance' },
    { id: 2, name: 'Jane Smith', class: '12', academicData: 'Excellent grades' }
  ]);

  return (
    <div className="students-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <h2>Students</h2>
        <StudentList students={students} />
      </div>
    </div>
  );
};

export default StudentsPage;
