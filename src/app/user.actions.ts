import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: any[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);
export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: any }>()
);
export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);
