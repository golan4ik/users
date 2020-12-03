import React from "react";
import { connect } from "react-redux";
import { setContributionsSort } from "../../data/actions";
import {
  getContributionsSort,
  getUserContributions,
} from "../../data/selectors";
import { DataRow, Label, InputField, Wrapper, Button } from "./layout";

const UserContribution = (props) => {
  const { contributions, currentSort, setSortDirection } = props;
  const nextSortValue = currentSort === "ASC" ? "DESC" : "ASC";

  return (
    <Wrapper>
      {contributions?.length ? (
        <>
          <DataRow>
            <Button onClick={() => setSortDirection(nextSortValue)}>
              {nextSortValue}
            </Button>
          </DataRow>
          {contributions.map(({ date, amount }, idx) => {
            const dateObj = new Date(parseInt(date));
            const dateString = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
            return (
              <DataRow key={idx}>
                <Label>{dateString}: </Label>
                <InputField name="name" value={amount} disabled />
              </DataRow>
            );
          })}
        </>
      ) : null}
    </Wrapper>
  );
};

const mapStateToProps = (state, props) => {
  return {
    contributions: getUserContributions(state),
    currentSort: getContributionsSort(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSortDirection: (value) => dispatch(setContributionsSort(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContribution);
