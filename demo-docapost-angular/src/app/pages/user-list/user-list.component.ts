import { Component, ElementRef, ViewChild } from '@angular/core';

import { UserService } from '../../utils/services/user.service';
import { User } from '../../utils/interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Useer } from '../../utils/interfaces/useer';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: Useer[] = [];
  selectedUser: Useer | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  viewUser(user: Useer) {
    this.selectedUser = user;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
