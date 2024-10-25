import { Component } from '@angular/core';
import { LoginComponent } from './log-in/login/login.component';
import { AuthService } from './common/auth.service';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CommonModule, LoginComponent, HomePageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel_Management_System_UI';

  showLogin = !AuthService.isLoggedIn();

  loginSuccess() {
    this.showLogin = false;
  }
}
