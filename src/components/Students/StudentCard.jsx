import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  return (
    <div className="student-card">
      <h4>{student.name}</h4>
      <p>Class: {student.class}</p>
      <button onClick={() => navigate(`/edit/${student.id}`)}>Edit</button>
    </div>
  );
};

export default StudentCard;
