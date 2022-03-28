import React from "react";

const Balance = ({ transactions }) => {
  let balance = 0;
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    balance += transaction.amount;

    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expense -= transaction.amount;
    }
  });

  return (
    <>
      <div className="balanceContainer">
        <h3>Your Balance</h3>
        <p className="balance">€ {balance.toFixed(2)}</p>
      </div>
      <div className="card balanceCard">
        <div className="balanceCardItem incomeContainer">
          <h3>Income</h3>
          <p className="balance income">€ {income.toFixed(2)}</p>
        </div>
        <div className="balanceCardItem expenseContainer">
          <h3>Expense</h3>
          <p className="balance expense">€ {expense.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
