import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SideLhnComponent } from "../side-lhn/side-lhn.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgIf, DashboardComponent, SideLhnComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
