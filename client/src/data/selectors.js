export const getIsLoadingUsersList = (state) => state.loadingUsersLst;
export const getSelectedUserId = (state) => state.selectedUserId;
export const getUsersList = (state) => state.users;
export const getSelectedUser = (state) => {
  const selectedUserId = getSelectedUserId(state);
  const usersList = getUsersList(state);
  return usersList.find((user) => user.id === selectedUserId);
};
export const getContributionsSort = (state) => state.contributionsSort;
export const getUserContributions = (state) => {
  const selectedUser = getSelectedUser(state);
  const sortDirection = getContributionsSort(state);
  const contribution = selectedUser?.contribute || [];

  return contribution.sort((a, b) => {
    if (a.date > b.date) return sortDirection === "ASC" ? -1 : 1;
    if (a.date < b.date) return sortDirection === "ASC" ? 1 : -1;

    return 0;
  });
};
export const getIsDarkMode = (state) => state.darkMode;
