import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './log-in/login/login.component';
import { AuthService } from './common/auth.service';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideLhnComponent } from './side-lhn/side-lhn.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CommonModule, NgxSpinnerModule, LoginComponent, HomePageComponent, DashboardComponent, SideLhnComponent, MainContentComponent],
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
