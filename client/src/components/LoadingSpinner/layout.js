import styled from "styled-components";
import { Flex } from "../../layout/shared";

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.h1`
  text-align: center;
`;
