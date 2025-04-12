import React, { useState } from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  const [sortField, setSortField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    setSortField(field);
    setAscending(prev => (field === sortField ? !prev : true));
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortField) return 0;

    const valA = a[sortField];
    const valB = b[sortField];

    if (typeof valA === "number" && typeof valB === "number") {
      return ascending ? valA - valB : valB - valA;
    }

    return ascending
      ? valA.toString().toLowerCase().localeCompare(valB.toString().toLowerCase())
      : valB.toString().toLowerCase().localeCompare(valA.toString().toLowerCase());
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Expense</th>
          <th onClick={() => handleSort("description")}>Description</th>
          <th onClick={() => handleSort("category")}>Category</th>
          <th onClick={() => handleSort("amount")}>Amount</th>
          <th onClick={() => handleSort("date")}>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              <button className="delete-btn" onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
