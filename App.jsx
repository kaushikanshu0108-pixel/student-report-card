import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", marks: 75 },
    { id: 2, name: "Aman", marks: 32 },
    { id: 3, name: "Priya", marks: 55 },
  ]);

  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };
    setStudents([...students, newStudent]);
  };

  const updateMarks = (id, newMarks) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, marks: Number(newMarks) } : s
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateMarks={updateMarks} />
      <Summary students={students} />
    </div>
  );
}

export default App;