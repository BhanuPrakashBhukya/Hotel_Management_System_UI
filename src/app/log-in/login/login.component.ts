import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  @Input() showModal: boolean = false;

  openSignUp() {
    this.showModal = true;
  }

  close(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted');
    this.close();
  }

}
