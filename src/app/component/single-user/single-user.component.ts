import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/user.reducer';
import * as UserActions from 'src/app/user.actions';
import { selectUser } from 'src/app/user.selectors';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
  user$!: Observable<any>; // Initialize with ! operator
  userId!: string; // Initialize with ! operator

  constructor(private route: ActivatedRoute, private store: Store<UserState>) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!; // Use non-null assertion operator

    this.store.dispatch(UserActions.loadUser({ id: this.userId }));
    this.user$ = this.store.select(selectUser);

    this.user$.subscribe((user) => {});
  }
}
