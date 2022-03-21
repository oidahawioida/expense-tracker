import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  const transactions = [
    {
      title: "Taschengeld",
      amount: 45,
    },
    {
      title: "Motto Party",
      amount: -50,
    },
    {
      title: "Gürtel",
      amount: -90,
    },
    {
      title: "Preisgeld",
      amount: 120,
    },
  ];

  return (
    <>
      <Header />
      <Balance transactions={transactions} />
      <History />
      <Transaction />
    </>
  );
}

export default App;
