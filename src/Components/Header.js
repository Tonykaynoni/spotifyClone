import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "../Styles/Header.css";
import { useDataLayerValue } from "../StateManager/DataLayer";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="header__search" />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
