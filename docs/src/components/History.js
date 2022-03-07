import React from "react";
import HistoryItem from "./HistoryItem";

const History = ({ spendings }) => {
  return (
    <>
      <h2>History</h2>
      <div className="historyContainer">
        {spendings.length > 0 ? (
          spendings.map((item, i) => (
            <HistoryItem
              key={i}
              amount={Math.abs(item.amount)}
              title={item.text}
              type={item.type}
            />
          ))
        ) : (
          <p>There are no spendings yet!</p>
        )}
      </div>
    </>
  );
};

export default History;
