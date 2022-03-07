import React from "react";

const HistoryItem = ({ amount, title, type }) => {
  return (
    <div
      className={
        "card historyItem " + (type === "income" ? "cardIncome" : "cardExpense")
      }
    >
      <p className="historyTitle">{title}</p>
      <p className="historyAmount">
        {type === "income" ? "+ " : "- "}
        {amount.toFixed(2)}
      </p>
    </div>
  );
};

export default HistoryItem;
