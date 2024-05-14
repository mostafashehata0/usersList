import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-single-user',
  templateUrl: './display-single-user.component.html',
  styleUrls: ['./display-single-user.component.css'],
})
export class DisplaySingleUserComponent implements OnInit {
  @Input() info: any;

  ngOnInit(): void {}
}
