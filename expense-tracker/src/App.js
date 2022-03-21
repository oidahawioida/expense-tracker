import Card from "./components/Card";

function App() {
  const data = [321, 172, -341, 87, 12, 16, -38];

  return (
    <div>
      <h1>Überschrift</h1>
      <p>
        Das ist ein beliebiger Text.{" "}
        {3 > 2 ? "Bewundernswert" : "besorgniserregend"}
      </p>
      {data.map((el) => (
        <Card value={el} />
      ))}
    </div>
  );
}

export default App;
