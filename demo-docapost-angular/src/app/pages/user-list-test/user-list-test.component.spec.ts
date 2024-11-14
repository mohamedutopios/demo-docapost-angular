import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTestComponent } from './user-list-test.component';
import { UserService } from '../../utils/test/user.service';

describe('UserListTestComponent', () => {
  let component: UserListTestComponent;
  let fixture: ComponentFixture<UserListTestComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    userServiceStub = {
      getUsers: () => ['Alice', 'Bob', 'Charlie'],
    };

    await TestBed.configureTestingModule({
      imports: [UserListTestComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users', () => {
    const compiled = fixture.nativeElement;
    const listeItems = compiled.querySelectorAll('ul li');
    expect(listeItems.length).toBe(3);

    expect(listeItems[0].textContent).toContain('Alice');

    expect(listeItems[1].textContent).toContain('Bob');

    expect(listeItems[2].textContent).toContain('Charlie');
  });
});


// ng test --include 'src/app/pages/user-list-test/user-list-test.component.spec.ts'