import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, Aakash Mehta!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>30.00L</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>15.00L</span>{" "}
            </p>
            <p>
              Opening balance <span>40.00L</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio (2025)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              66.33L <small>+442.21%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>81.33L</span>{" "}
            </p>
            <p>
              Investment <span>15.00L</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
