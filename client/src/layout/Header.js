import React from "react";
import styled from "styled-components";
import { Flex } from "./shared";
import HeaderComponent from "../components/Header/Header";

const Wrapper = styled(Flex)`
  padding: 0.5em;
  justify-content: stretch;
  align-items: stretch;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderComponent />
    </Wrapper>
  );
};

export default Header;
