import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  switchMap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/user.reducer';

import * as UserActions from 'src/app/user.actions';
import {
  selectAllUsers,
  selectUser,
  selectUsersLoaded,
} from 'src/app/user.selectors';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit, OnDestroy {
  users$ = this.store.select(selectAllUsers);
  user$ = this.store.select(selectUser);
  loaded$ = this.store.select(selectUsersLoaded);
  allUsers: any[] = [];
  dataForSingleUser: any[] = [];
  switch: boolean = false;
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    // Subscribe to users$ to store all users locally
    this.users$.pipe(takeUntil(this.destroy$)).subscribe((users) => {
      if (users) {
        this.allUsers = users;
      }
    });

    // Subscribe to search input value changes
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((res) => {
          if (!res) {
            // If input is empty, return observable of all users from store
            this.switch = false;
            return this.users$;
          } else {
            // If input has value, dispatch action to load specific user
            this.store.dispatch(UserActions.loadUser({ id: res }));
            return this.user$;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((result) => {
        if (Array.isArray(result) && result.length) {
          // If result is an array (all users), display all users
          this.dataForSingleUser = result;
          this.switch = false;
        } else if (result) {
          // If result is a single user object, display that user
          this.dataForSingleUser = [result];
          this.switch = true;
        } else {
          // If no user found, reset state
          this.dataForSingleUser = [];
          this.switch = false;
        }
      });

    // Load all users on component initialization
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getAllUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }
}
