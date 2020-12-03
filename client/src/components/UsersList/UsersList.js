import React from "react";
import { connect } from "react-redux";
import { setSelectedUserId } from "../../data/actions";
import { getSelectedUserId, getUsersList } from "../../data/selectors";
import { Avatar, List, ListItem, Name } from "./layout";

const UsersList = (props) => {
  const { users, selectedUserId, setSelectedId } = props;
  return (
    <List>
      {users.map(({ id, name, avatar }) => {
        return (
          <ListItem
            key={id}
            onClick={() => setSelectedId(id)}
            selected={selectedUserId === id}
          >
            <Avatar url={avatar} />
            <Name>{name}</Name>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: getUsersList(state),
    selectedUserId: getSelectedUserId(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedId: (id) => dispatch(setSelectedUserId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
