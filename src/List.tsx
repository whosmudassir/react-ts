import React from "react";
import { IState as IProps } from "./App";

const List: React.FC<IProps> = ({ car }) => {
  return (
    <div>
      List
      {car.map((item) => (
        <div>
          <p>
            {item.name} {item.age}
          </p>
        </div>
      ))}
    </div>
  );
};

export default List;
