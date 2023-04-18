import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(process.env.PORT);
  console.log(process.env.TEST);

  return <h1>HOMEPAGE</h1>;
}
export default App;
