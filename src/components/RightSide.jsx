import React from "react";

export default function RightSide({ historyList, removeHistory }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "50px",
          backgroundColor: "#FFFFFF",
          padding: "30px 10px ",
          width: "100 %",
        }}
      >
        <h3 className="u-align-center u-custom-font u-font-ubuntu u-form-group u-form-text u-label-top u-text u-text-1">
          History
        </h3>
        <div style={{ marginTop: "20px", padding: "10px" }}>
          {historyList.map((item) => (
            <div
              className="mt-1"
              style={{
                width: "100%",
                borderRadius: "50px",
                backgroundColor: "#F2F2F2",
              }}
            >
              <div className="d-flex justify-content-between   align-items-center">
                <span style={{ paddingLeft: "20px" }}>
                  {item.input.num_one} + {item.input.num_two} = {item.value}
                </span>
                <button
                  onClick={() => removeHistory(item.id)}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
