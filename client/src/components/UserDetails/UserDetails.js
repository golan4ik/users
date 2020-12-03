import React from "react";
import { connect } from "react-redux";
import { removeSelectedUser, updateUserField } from "../../data/actions";
import { getSelectedUser } from "../../data/selectors";
import { Button } from "../UserContribution/layout";
import {
  DataRow,
  Label,
  InputField,
  Wrapper,
  Option,
  SelectField,
} from "./layout";

const UserDetails = (props) => {
  const { user, updateField, removeUser } = props;

  const onFieldChange = ({ target: { name, value } }) => {
    updateField(user.id, name, value);
  };

  return (
    <Wrapper>
      <DataRow>
        <Button onClick={() => removeUser()}>Remove User</Button>
      </DataRow>
      <DataRow>
        <Label>Name: </Label>
        <InputField name="name" value={user.name} onChange={onFieldChange} />
      </DataRow>
      <DataRow>
        <Label>Email: </Label>
        <InputField
          name="email"
          type="email"
          value={user.email}
          onChange={onFieldChange}
        />
      </DataRow>
      <DataRow>
        <Label>Avatar: </Label>
        <InputField
          name="avatar"
          type="text"
          value={user.avatar}
          onChange={onFieldChange}
        />
      </DataRow>
      <DataRow>
        <Label>Ownership: </Label>
        <SelectField
          name="ownership"
          selected={user.ownership}
          onChange={onFieldChange}
        >
          {["owner", "admin", "member"].map((role, idx) => {
            return (
              <Option key={idx} value={role}>
                {role}
              </Option>
            );
          })}
        </SelectField>
      </DataRow>
    </Wrapper>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: getSelectedUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateField: (id, fieldName, value) =>
      dispatch(updateUserField({ id, fieldName, value })),
    removeUser: () => dispatch(removeSelectedUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
