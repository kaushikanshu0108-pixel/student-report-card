function Summary({ students }) {
  const total = students.reduce((sum, s) => sum + s.marks, 0);
  const avg = (total / students.length).toFixed(2);

  const passed = students.filter((s) => s.marks >= 40).length;
  const failed = students.length - passed;

  return (
    <div className="summary">
      <h3>📊 Summary</h3>
      <p>Total Students: {students.length}</p>
      <p>Average Marks: {avg}</p>
      <p>Passed: {passed}</p>
      <p>Failed: {failed}</p>
    </div>
  );
}

export default Summary;