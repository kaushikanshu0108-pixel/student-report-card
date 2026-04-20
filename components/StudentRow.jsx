function StudentRow({ student, updateMarks }) {
  const isPass = student.marks >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.marks}
          onChange={(e) =>
            updateMarks(student.id, e.target.value)
          }
        />
      </td>
      <td style={{ color: isPass ? "green" : "red" }}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;