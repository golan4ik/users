import styled from "styled-components";
import {
  CommonInputStyle,
  Flex,
  FlexColumn,
} from "../../layout/shared";

export const Wrapper = styled(FlexColumn)`
  margin: 10% 0;
  min-width: 30%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5em;
  overflow: auto;
  min-height: 50%;
`;

export const DataRow = styled(Flex)`
  padding: 0.5em 1em;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-weight: bold;
  flex: 1;
`;

export const InputField = styled.input`
  ${CommonInputStyle}
  flex: 0;
`;

export const Button = styled.button`
  ${CommonInputStyle}
`;
