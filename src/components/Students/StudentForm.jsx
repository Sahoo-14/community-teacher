import React, { useState } from 'react';

const StudentForm = ({ student, onSave }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label>Class:</label>
      <input name="class" value={formData.class} onChange={handleChange} />

      <label>Academic Data:</label>
      <textarea name="academicData" value={formData.academicData} onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  );
};

export default StudentForm;
