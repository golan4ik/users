import React from "react";
import { connect } from "react-redux";
import { loadUsersList, toggleDarkMode } from "../../data/actions";
import { Button } from "../UserContribution/layout";
import { Wrapper } from "./layout";

const Header = ({ reloadUsers, toggleDarkMode }) => {
  return (
    <Wrapper>
      <Button onClick={reloadUsers}>Reload Users</Button>
      &nbsp;&nbsp;&nbsp;
      <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reloadUsers: () => dispatch(loadUsersList()),
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
