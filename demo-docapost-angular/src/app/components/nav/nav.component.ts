import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TitleService } from '../../utils/services/title.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../utils/services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

titrePage: string = '';

constructor(private titleService: TitleService, private authService: AuthService, private router: Router) { }



logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

isLogged(): boolean {
  return this.authService.isLogged();
}

ngOnInit() {
  this.titleService.currentTitle.subscribe(title => this.titrePage = title)
}

}