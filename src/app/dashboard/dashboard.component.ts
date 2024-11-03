import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../log-in/service/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isDropdownActive = false;
  isChangePasswordModalOpen = false;
  newPassword = '';
  confirmPassword = '';
  passwordMismatch = false;

  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor(private eRef: ElementRef, private loginService: LoginService, private auth: AuthService) {}

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

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

  onOptionSelect(option: string) {
    if (option === 'logout') {
      this.auth.logOut();
    } else if(option === 'changePassword') {
      this.openChangePasswordModal();
    }
    this.isDropdownActive = false;
  }

  openChangePasswordModal() {
    this.isChangePasswordModalOpen = true;
  }

  closeChangePasswordModal() {
    this.isChangePasswordModalOpen = false;
    this.newPassword = '';
    this.confirmPassword = '';
    this.passwordMismatch = false;
  }

  validatePasswordMatch() {
    this.passwordMismatch = this.newPassword !== this.confirmPassword;
  }

  onChangePassword() {
    this.validatePasswordMatch();
    if (!this.passwordMismatch) {
      debugger;
      this.loginService.changePassword(this.newPassword).subscribe(response => {
        debugger
        this.isChangePasswordModalOpen = false;
        this.auth.logOut();
      }, error => {
        console.error('Error changing password', error);
      })
    }
  }

}
