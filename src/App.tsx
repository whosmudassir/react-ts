import "./styles.css";
import { useState } from "react";
import List from "./List";
import InputForm from "./InputForm";

export interface IState {
  car: {
    name: string;
    age: number;
  }[];
}

export default function App() {
  const [car, setCar] = useState<IState["car"]>([{ name: "Drake", age: 34 }]);

  return (
    <div className="App">
      <h1>React + TS</h1>
      <List car={car} />
      <InputForm car={car} setCar={setCar} />
    </div>
  );
}
