import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTestComponent } from './user-list-test.component';
import { UserService } from '../../utils/test/user.service';

describe('UserListTestComponent', () => {
  let component: UserListTestComponent;
  let fixture: ComponentFixture<UserListTestComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
