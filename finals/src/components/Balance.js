import React from "react";

const Balance = ({ spendings }) => {
  let total = 0;
  let income = 0;
  let expense = 0;

  spendings.forEach((item) => {
    const amount = Number(item.amount);

    total += amount;
    amount < 0 ? (expense += Math.abs(amount)) : (income += Math.abs(amount));
  });

  return (
    <>
      <div className="balanceContainer">
        <h3>Your Balance</h3>
        <p className="balance">
          €{" "}
          {total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="card balanceCard">
        <div className="balanceCardItem incomeContainer">
          <h3>Income</h3>
          <p className="balance income">
            € {income.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="balanceCardItem expenseContainer">
          <h3>Expense</h3>
          <p className="balance expense">
            € {expense.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Balance;
