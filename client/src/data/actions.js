export const SET_LOADING_USERS_LIST = "USERS/LOADING/SET";
export const SET_SELECTED_USER_ID = "USERS/SELECTED_ID/SET";
export const SET_USERS_LIST = "USERS/LIST/SET";
export const UPDATE_USER_FIELD = "USER/FIELD/UPDATE";
export const SET_CONTRIBUTIONS_SORT = "USER/CONTRIBUTION/SORT/SET";
export const REMOVE_SELECTED_USER = "USERS/SELECTED/REMOVE";
export const TOGGLE_DARK_MODE = "THEME/MODE/DARK/TOGGLE";

export const ON_LOAD_USERS = "USERS/ON/LOAD";

export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });

export const removeSelectedUser = () => ({ type: REMOVE_SELECTED_USER });

export const setLoadingUsersList = (value) => ({
  type: SET_LOADING_USERS_LIST,
  value,
});

export const setSelectedUserId = (id) => ({ type: SET_SELECTED_USER_ID, id });
export const setUsersList = (users) => ({ type: SET_USERS_LIST, users });
export const updateUserField = ({ id, fieldName, value }) => ({
  type: UPDATE_USER_FIELD,
  id,
  fieldName,
  value,
});

export const loadUsersList = () => ({ type: ON_LOAD_USERS });
export const setContributionsSort = (value) => ({
  type: SET_CONTRIBUTIONS_SORT,
  value,
});
