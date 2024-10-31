import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isDropdownActive = false;

  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(private eRef: ElementRef, private auth: AuthService) {}

  // Toggle dropdown on profile image click
  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  // Detect click outside the dropdown to close it
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (
      this.isDropdownActive &&
      !this.eRef.nativeElement.contains(targetElement)
    ) {
      this.isDropdownActive = false;
    }
  }

  // Handle option selection
  onOptionSelect(option: string) {
    if (option === 'logout') {
      this.auth.logOut();
    }
    this.isDropdownActive = false;
  }

}
