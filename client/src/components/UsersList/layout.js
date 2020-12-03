import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${({ selected }) => {
    return (
      selected && {
        backgroundColor: "rgba(218 ,165,32, 0.3)",
      }
    );
  }}
  &:hover {
    text-shadow: 0px 2px 5px
      ${({ theme }) =>
        theme.isDark ? "rgba(255,255,255, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  }
`;

export const Avatar = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${({ url }) => url}");
`;

export const Name = styled.span`
  font-weight: bold;
  flex: 1;
  padding-left: 0.5em;
`;
