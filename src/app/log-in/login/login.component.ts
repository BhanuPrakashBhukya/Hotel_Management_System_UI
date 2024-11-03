import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../common/auth.service';
import { LoginService } from '../service/login.service';
import { Country } from '../../country';
import { States } from '../../states';
import { Hotel } from '../../hotel/hotel';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  @Output('loginSuccess') loginSuccess = new EventEmitter();

  @Input() showModal: boolean = false;

  countries: Country[] = [];
  states: States[] = [];

  uniqueId: string = '';
  password: string = '';

  loginError: string = 'Login Error!';
  inValidaLogin: boolean = false;

  form: Hotel = {
    name: '',
    phone: '',
    email: '',
    password: '',
    category: 0,
    addressFirstLine: '',
    addressSecondLine: '',
    city: '',
    state: 0,
    country: 0,
    pinCode: '',
  };

  ngOnInit(): void {}

  constructor(
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  openSignUp() {
    this.loginService.getCountries().subscribe(
      (response: Country[]) => {
        this.countries = response;
      },
      (error: any) => {
        console.error('Error fetching countries', error);
      }
    );

    this.loginService.getStates().subscribe(
      (response: States[]) => {
        this.states = response;
      },
      (error: any) => {
        console.error('Error fetching states', error);
      }
    );
    this.showModal = true;
  }

  focusNextField(nextField: any) {
    nextField.focus();
  }

  logInButton() {
    this.authService.logIn(this.uniqueId, this.password).subscribe(
      (response) => {
        if (response && response['jwt']) {
          const token = response['jwt'];
          localStorage.setItem('jwt', token);

          const payloadBase64 = token.split('.')[1];
          const payload = JSON.parse(atob(payloadBase64));
          const hotelId = payload.aud;
          localStorage.setItem('hoteId', hotelId);

          this.loginSuccess.emit();
        }
      },
      (error) => {
        const status = error?.status;
        if (status === 403 || 'Forbidden' === error.error.error) {
          this.loginError = 'Incorrect Unique Id or Password.';
        } else {
          this.loginError = error.error.errorMessage;
        }
        this.inValidaLogin = true;
      }
    );
  }

  close(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.close();
    this.loginService.register(this.form).subscribe(
      (response: Hotel) => {
        console.log('Registration Successful');
        alert('Sign up successful');
        // this.clearForm();
        this.close();
      },
      (error: any) => {
        console.error('Error registering', error);
      }
    );
  }
}
