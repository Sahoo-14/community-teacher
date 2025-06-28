// Mock data - in a real app, you would make API calls here
const students = [
  {
    id: '1',
    name: 'John Doe',
    grade: '5',
    email: 'john@example.com',
    scores: {
      math: 85,
      science: 92
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    grade: '4',
    email: 'jane@example.com',
    scores: {
      math: 78,
      science: 88
    }
  },
  // Add more mock students as needed
];

export const getStudents = async () => {
  // Simulate API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(students);
    }, 500);
  });
};

export const getStudentById = async (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(students.find(student => student.id === id));
    }, 500);
  });
};

export const updateStudent = async (id, data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = students.findIndex(student => student.id === id);
      if (index !== -1) {
        students[index] = { ...students[index], ...data };
      }
      resolve();
    }, 500);
  });
};