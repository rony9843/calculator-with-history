import React, { useState } from "react";
import "../App.css";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Layout() {
  const initialValue = {
    num_one: 0,
    num_two: 0,
  };

  const [result, setResult] = useState({ ...initialValue });

  const [historyList, setHistoryList] = useState([]);

  // ? for value
  const [value, setValue] = useState(0);

  // ? random id generator

  const IdGenerator = () => {
    return Math.floor(100000000 + Math.random() * 900000000);
  };

  // ? handle clear
  const handlerClear = () => {
    setResult(initialValue);
    setValue(0);
  };

  // ? handler input
  const handlerInput = (event) => {
    console.log(event.target.name);

    setResult({
      ...result,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  // ? action fun
  const actionFun = (e, evalValue) => {
    const action = eval(`${result.num_one} ${e} ${result.num_two} `);
    setValue(action);
    evalValue(action);
  };

  // ? action operator
  const ActionOperator = (e) => {
    // ? call action fun
    actionFun(e, (evalValue) => {
      pushHistory(evalValue);
    });
  };

  // ? push history
  const pushHistory = (evalValue) => {
    // ? create a new obj
    const list = {
      id: IdGenerator(),
      input: result,
      value: evalValue,
      time: new Date(),
    };

    // ? push in array
    setHistoryList([list, ...historyList]);
  };

  //! remove from the history
  const removeHistory = (id) => {
    setHistoryList(historyList.filter((dt) => dt.id !== id));
  };

  return (
    <div>
      <section
        className=""
        id="carousel_c83b"
        data-image-width="2250"
        data-image-height="1500"
        style={{
          width: "80%",
          textAlign: "center",
          margin: " auto",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ padding: "20px" }}>
              <LeftSide
                value={value}
                ActionOperator={ActionOperator}
                result={result}
                handlerInput={handlerInput}
                handlerClear={handlerClear}
              ></LeftSide>
            </div>
          </div>
          <div className="col-6">
            <div style={{ padding: "20px" }}>
              <RightSide
                removeHistory={removeHistory}
                historyList={historyList}
              ></RightSide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
