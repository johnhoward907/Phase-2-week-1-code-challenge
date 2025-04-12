import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import SearchBar from "./SearchBar";
import './App.css';



const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Ugali Mumambo", description: "Wednesday’s Lunch", category: "food", amount: 200, date: "2024-04-10" },
    { id: 2, name: "KPLC tokens", description: "power tokens", category: "utilities", amount: 300, date: "2024-04-11" },
    { id: 3, name: "Buy shoes", description: "Add to my shoe collection", category: "fashion", amount: 1500, date: "2024-04-12" },
    { id: 4, name: "Buy book", description: "add to my book collection", category: "education", amount: 500, date: "2024-04-12" },
    { id: 5, name: "Pay Loan", description: "bank loan repayment", category: "finance", amount: 1000, date: "2024-04-13" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="right-content">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
