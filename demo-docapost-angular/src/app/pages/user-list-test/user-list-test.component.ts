import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utils/test/user.service';

@Component({
  selector: 'app-user-list-test',
  standalone: true,
  imports: [],
  templateUrl: './user-list-test.component.html',
  styleUrl: './user-list-test.component.css',
})
export class UserListTestComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  addUser(): void {
    this.userService.addUser('David');
    this.users = this.userService.getUsers();
  }
}
