import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: any[];
  user: any | null;
  error: any | null;
  loaded: boolean;
}

export const initialState: UserState = {
  users: [],
  user: null,
  error: null,
  loaded: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loaded: false })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loaded: true,
    error: null,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
