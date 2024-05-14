import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
export const selectUsersLoaded = createSelector(
  selectUserState,
  (state: UserState) => state.loaded
);
export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
