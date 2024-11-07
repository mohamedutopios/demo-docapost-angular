import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: string[] = ['Alice', 'Bob', 'Charlie'];

  constructor() {}

  getUsers(): string[] {
    return this.users;
  }

  addUser(user: string): void {
    if (user && !this.users.includes(user)) {
      this.users.push(user);
    }
  }
removeUser(user: string): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

}
