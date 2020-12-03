import * as actions from "./actions";

const initialState = {
  loadingUsersLst: false,
  selectedUserId: null,
  contributionsSort: "ASC",
  darkMode: false,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case actions.REMOVE_SELECTED_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== state.selectedUserId;
        }),
        selectedUserId: null,
      };
    case actions.SET_CONTRIBUTIONS_SORT:
      return {
        ...state,
        contributionsSort: action.value,
      };
    case actions.SET_LOADING_USERS_LIST:
      return {
        ...state,
        loadingUsersLst: action.value,
      };
    case actions.SET_SELECTED_USER_ID:
      return { ...state, selectedUserId: action.id };
    case actions.SET_USERS_LIST:
      return { ...state, users: action.users };
    case actions.UPDATE_USER_FIELD:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            user[action.fieldName] = action.value;
          }
          return { ...user };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
