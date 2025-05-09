import React from "react";
import "../designs/messfind.css";

const ToggleSwitch = ({isChecked,setIsChecked,className}) => {


  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`toggle-container ${isChecked ? "checked" : ""} blue ${className}`}>
      <input
        type="checkbox"
        className={`toggle-checkbox ${isChecked ? "toggled-once" : ""}`}
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className="toggle-track w-[102%]">
        <div className={`toggle-thumb ${isChecked ? "toggled-once" : ""}`} />
      </div>
    </div>
  );
};

export default ToggleSwitch;

