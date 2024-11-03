import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SideLhnComponent } from "../side-lhn/side-lhn.component";
import { MainContentComponent } from "../main-content/main-content.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ NgIf, DashboardComponent, SideLhnComponent, MainContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
