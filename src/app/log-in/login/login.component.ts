import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../common/auth.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  @Output("loginSuccess") loginSuccess = new EventEmitter;
  
  @Input() showModal: boolean = false;
  uniqueId: string = "";
  password: string = "";

  loginError: string = "Login Error!";
  inValidaLogin: boolean = false;

  ngOnInit(): void {

  }

  constructor(private authService: AuthService) {}

  openSignUp() {
    this.showModal = true;
  }

  logInButton() {
    debugger
    this.authService.logIn(this.uniqueId, this.password).subscribe(response => {
      if (response && response['jwt']) {
        debugger
        const token = response['jwt'];
        localStorage.setItem('jwt', token);
        this.loginSuccess.emit();
      }
    }, error => {
      debugger
      const status = error?.status;
      if (status === 403 || "Forbidden" === error.error.error) {
        this.loginError = "Incorrect Unique Id or Password.";
      } else {
        this.loginError = error.error.errorMessage;
      }
      this.inValidaLogin = true;
    });
  }

  close(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    console.log('Form submitted');
    this.close();
  }

}
