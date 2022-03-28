import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  const [spendings, setSpendings] = useState(() => []);

  useEffect(() => {
    const localData = localStorage.getItem("expense-tracker--spendings");

    if (localData !== null) setSpendings(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "expense-tracker--spendings",
      JSON.stringify(spendings)
    );
  }, [spendings]);

  return (
    <>
      <Header />
      <Balance spendings={spendings} />
      <History spendings={spendings} />
      <Transaction spendings={spendings} setSpendings={setSpendings} />
    </>
  );
}

export default App;
