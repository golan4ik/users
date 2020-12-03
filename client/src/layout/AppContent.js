import React from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import UserContribution from "../components/UserContribution/UserContribution";
import HeaderLayout from "./Header";
import UserDetails from "../components/UserDetails/UserDetails";
import UsersList from "../components/UsersList/UsersList";
import { getIsDarkMode, getSelectedUserId } from "../data/selectors";
import { Flex, FlexColumn } from "./shared";

const Wrapper = styled(Flex)`
  border: 1px solid black;
  overflow: hidden;
  align-items: stretch;
  flex-wrap: nowrap;
  flex: 1;
`;

const Sidebar = styled(FlexColumn)`
  height: 100%;
  min-width: 200px;
  max-width: 30%;
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  overflow-y: auto;
`;

const Content = styled(Flex)`
  height: 100%;
  overflow: auto;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

const AppContent = ({ selectedUserId, isDark }) => {
  return (
    <ThemeProvider theme={{ isDark }}>
      <HeaderLayout />
      <Wrapper>
        <Sidebar>
          <UsersList />
        </Sidebar>
        <Content>
          {selectedUserId ? (
            <>
              <UserDetails />
              <UserContribution />
            </>
          ) : null}
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedUserId: getSelectedUserId(state),
    isDark: getIsDarkMode(state),
  };
};

export default connect(mapStateToProps, null)(AppContent);
