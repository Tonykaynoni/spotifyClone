import React from "react";
import "../Styles/SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption___icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
