import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Useer } from '../../utils/interfaces/useer';
import { UserService } from '../../utils/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  count: number = 0;
  user: Useer = { id: 0, name: '', email: ''};
  isEditMode: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.isEditMode = true;
      this.loadUser(+id);
    } else {
      this.isEditMode = false;
      this.userService.getUsers().subscribe((users) => {
        this.count = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        this.user.id = this.count;
      });
    }
  }

  loadUser(id: number) {
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data;
    });
  }

  saveUser() {
    if (this.isEditMode) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
