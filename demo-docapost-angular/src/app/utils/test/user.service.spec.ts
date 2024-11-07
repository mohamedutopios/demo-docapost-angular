import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of users', () => {
    const users = service.getUsers();
    expect(users).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should add a user', () => {
    service.addUser('David');
    const users = service.getUsers();
    expect(users).toEqual(['Alice', 'Bob', 'Charlie', 'David']);
  });

  it('should not add a user if it already exists', () => {
    service.addUser('Alice');
    const users = service.getUsers();
    expect(users).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should remove a user', () => {
    service.removeUser('Bob');
    const users = service.getUsers();
    expect(users).toEqual(['Alice', 'Charlie']);
  });

  it('should not remove a user if it does not exist', () => {
    service.removeUser('Eve');
    const users = service.getUsers();
    expect(users).toEqual(['Alice', 'Bob', 'Charlie']);
  });
});
