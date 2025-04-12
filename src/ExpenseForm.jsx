import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <br/>
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <br/>
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <br/>
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <br/>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
