import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
