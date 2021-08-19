import React from "react";
import { useState } from "react";
import { IState as IProps } from "./App";

interface Props {
  car: IProps["car"];
  setCar: React.Dispatch<React.SetStateAction<IProps["car"]>>;
}

const InputForm: React.FC<Props> = ({ car, setCar }) => {
  const [form, setForm] = useState({
    name: "",
    age: ""
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = () => {
    setCar([
      ...car,
      {
        name: form.name,
        age: parseInt(form.age)
      }
    ]);
    setForm({
      name: "",
      age: ""
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <input
        value={form.name}
        type="text"
        onChange={changeHandler}
        placeholder="name"
        name="name"
      />
      <input
        value={form.age}
        type="number"
        onChange={changeHandler}
        placeholder="age"
        name="age"
      />

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default InputForm;
