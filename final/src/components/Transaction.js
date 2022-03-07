import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

const Transaction = ({ setSpendings, spendings }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const addTransaction = (e) => {
    e.preventDefault();

    if (text.length < 3) {
      alert("Enter a text with at least 3 characters!");
      return;
    }

    setSpendings([
      ...spendings,
      { amount, text, type: amount < 0 ? "expense" : "income" },
    ]);

    setText("");
    setAmount(0);
  };

  return (
    <>
      {showForm && (
        <div
          className={"transactionFormContainer " + (showForm ? "show" : null)}
        >
          <h2>Add new transaction</h2>
          <form className="transactionForm" onSubmit={(e) => addTransaction(e)}>
            <fieldset>
              <label>Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </fieldset>
            <fieldset>
              <label>Amount</label>
              <input
                type="number"
                value={amount}
                step={0.01}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </fieldset>
            <button type="submit">Add transaction</button>
          </form>
        </div>
      )}
      <div
        className={"icon " + (!showForm ? "addIcon" : "closeIcon")}
        onClick={() => setShowForm(!showForm)}
      >
        <IoAdd />
      </div>
    </>
  );
};

export default Transaction;
