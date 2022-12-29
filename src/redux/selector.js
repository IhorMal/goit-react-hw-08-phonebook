
export const newContactSelector = store => store.contactst.items;

export const isLoadingSelector = store => store.contactst.isLoading;

export const errorSelector = store => store.contactst.error;

export const filterSelector = store => store.filter;

export const isLoggedIn = store => store.auth.isLoggedIn;

export const name = store => store.auth.user.name;

export const error = store => store.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;
