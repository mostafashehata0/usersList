import { UserState } from './user.reducer';

export interface AppState {
  users: UserState;
  // Other state slices if any
}
