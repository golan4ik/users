import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexColumn } from "./shared";
import AppContentLayout from "./AppContent";
import { connect } from "react-redux";
import {
  loadUsersList,
  setSelectedUserId,
  setUsersList,
} from "../data/actions";
import {
  getIsLoadingUsersList,
  getSelectedUser,
  getUsersList,
} from "../data/selectors";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Wrapper = styled(FlexColumn)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const App = (props) => {
  const { isLoading, loadUsers } = props;

  useEffect(() => {
    loadUsers(); // load users on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>{isLoading ? <LoadingSpinner /> : <AppContentLayout />}</Wrapper>
  );
};

const mapStateToProps = (state, props) => {
  return {
    isLoading: getIsLoadingUsersList(state),
    users: getUsersList(state),
    selectedUser: getSelectedUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (value) => dispatch(loadUsersList()),
    setUsersList: (list) => dispatch(setUsersList(list)),
    setSelectedUserId: (id) => dispatch(setSelectedUserId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
