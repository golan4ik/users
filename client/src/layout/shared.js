import styled, { css } from "styled-components";

export const CommonTheme = css`
  ${(props) => {
    const { theme } = props;
    return {
      "background-color": theme.isDark ? "rgba(0,0,0,0.5)" : "white",
      color: theme.isDark ? "white" : "black",
      "border-color": theme.isDark ? "white" : "black",
    };
  }}}
`;

export const ThemedDiv = styled.div`
  ${CommonTheme};
`;

export const Flex = styled(ThemedDiv)`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const CommonInputStyle = css`
  ${CommonTheme}
  padding: 3px 5px;
  border-radius: 3px;
`;
