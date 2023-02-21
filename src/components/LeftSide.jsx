import React from "react";

export default function LeftSide({
  ActionOperator,
  handlerClear,
  handlerInput,
  value,
  result,
}) {
  return (
    <div>
      <div
        className="u-align-center u-form u-radius-50 u-white u-form-1   "
        style={{ height: "400px" }}
      >
        <div className="" name="form" style={{ padding: "30px" }}>
          <h3 className="u-align-center u-custom-font u-font-ubuntu u-form-group u-form-text u-label-top u-text u-text-1">
            Result : {value}
          </h3>
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div className="row d-flex align-items-end">
              <div className="col-4">
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                  <label for="name-66b3" className="u-label">
                    Number One
                  </label>
                  <input
                    onChange={handlerInput}
                    value={result.num_one}
                    type="number"
                    id="num_two"
                    name="num_one"
                    className="u-grey-5 u-input u-input-rectangle u-radius-10"
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-top">
                  <label for="email-66b3" className="u-label">
                    Number Two
                  </label>
                  <input
                    onChange={handlerInput}
                    value={result.num_two}
                    type="number"
                    id="num_two"
                    name="num_two"
                    className="u-grey-5 u-input u-input-rectangle u-radius-10"
                  />
                </div>
              </div>
              <div className="col-2">
                <div
                  onClick={() => handlerClear()}
                  className="u-align-center u-form-group u-form-submit u-label-top"
                >
                  <a className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-palette-4-base u-radius-10 u-btn-1">
                    Clear
                  </a>
                  <input
                    type="submit"
                    value="submit"
                    className="u-form-control-hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              onClick={() => ActionOperator("+")}
              style={{ margin: "0px 5px" }}
              className="u-align-center u-form-group u-form-submit u-label-top"
            >
              <a className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-palette-4-base u-radius-10 u-btn-1">
                +
              </a>
              <input
                type="submit"
                value="submit"
                className="u-form-control-hidden"
              />
            </div>{" "}
            <div
              onClick={() => ActionOperator("-")}
              style={{ margin: "0px 5px" }}
              className="u-align-center u-form-group u-form-submit u-label-top"
            >
              <a
                href="#"
                className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-palette-4-base u-radius-10 u-btn-1"
              >
                -
              </a>
              <input
                type="submit"
                value="submit"
                className="u-form-control-hidden"
              />
            </div>
            <div
              onClick={() => ActionOperator("*")}
              style={{ margin: "0px 5px" }}
              className="u-align-center u-form-group u-form-submit u-label-top"
            >
              <a
                href="#"
                className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-palette-4-base u-radius-10 u-btn-1"
              >
                X
              </a>
              <input
                type="submit"
                value="submit"
                className="u-form-control-hidden"
              />
            </div>
            <div
              onClick={() => ActionOperator("/")}
              style={{ margin: "0px 5px" }}
              className="u-align-center u-form-group u-form-submit u-label-top"
            >
              <a
                href="#"
                className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-palette-4-base u-radius-10 u-btn-1"
              >
                /
              </a>
              <input
                type="submit"
                value="submit"
                className="u-form-control-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
