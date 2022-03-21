import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  const [spendings, setSpendings] = useState([]);

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
