import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/Students/StudentForm';
import Sidebar from '../components/Layout/Sidebar';
import Topbar from '../components/Layout/Topbar';

const EditStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id,
    name: 'John Doe',
    class: '10',
    academicData: 'Good performance'
  });

  const handleSave = (updatedStudent) => {
    console.log('Saved student:', updatedStudent);
    navigate('/students');
  };

  return (
    <div className="edit-student-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <h2>Edit Student</h2>
        <StudentForm student={student} onSave={handleSave} />
      </div>
    </div>
  );
};

export default EditStudentPage;
