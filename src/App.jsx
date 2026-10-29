import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");

  const handleButtonClick = (label) => {
    switch (label) {
      case "1":
        setDisplayValue("1 - Being On Time");
        break;
      case "2":
        setDisplayValue("2 - Making An Effort");
        break;
      case "3":
        setDisplayValue("3 - Being High Energy");
        break;
      case "4":
        setDisplayValue("4 - Having A Positive Attitude");
        break;
      case "5":
        setDisplayValue("5 - Being Passionate");
        break;
      case "6":
        setDisplayValue("6 - Using Good Body Language");
        break;
      case "7":
        setDisplayValue("7 - Being Coachable");
        break;
      case "8":
        setDisplayValue("8 - Doing A Little Extra");
        break;
      case "9":
        setDisplayValue("9 - Being Prepared");
        break;
      case "0":
        setDisplayValue("0 - Having A Strong Work Ethic");
        break;
      case "NAME":
        setDisplayValue("Abrham Beaver Layug"); // Replace with your actual full name
        break;
      case "SUBJ":
        setDisplayValue("C-PCIT9"); // Replace with your actual subject code
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">Abrham Beaver Layug - WMD 3A</h1>
        <Display value={displayValue} />
        
        <div className="buttons">
          <Button label="7" onClick={() => handleButtonClick("7")} />
          <Button label="8" onClick={() => handleButtonClick("8")} />
          <Button label="9" onClick={() => handleButtonClick("9")} />

          <Button label="4" onClick={() => handleButtonClick("4")} />
          <Button label="5" onClick={() => handleButtonClick("5")} />
          <Button label="6" onClick={() => handleButtonClick("6")} />

          <Button label="1" onClick={() => handleButtonClick("1")} />
          <Button label="2" onClick={() => handleButtonClick("2")} />
          <Button label="3" onClick={() => handleButtonClick("3")} />

          <Button label="NAME" onClick={() => handleButtonClick("NAME")} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="SUBJ" onClick={() => handleButtonClick("SUBJ")} />
        </div>
      </div>
    </div>
  );
}