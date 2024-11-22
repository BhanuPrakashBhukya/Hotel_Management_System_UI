import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-lhn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-lhn.component.html',
  styleUrl: './side-lhn.component.css'
})
export class SideLhnComponent {
  
  activeItemIndex = -1;
  items = ['Home', 'Hotels', 'Rooms'];

  constructor(private router: Router) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.activeItemIndex = (this.activeItemIndex + 1) % this.items.length;
    } else if (event.key === 'ArrowUp') {
      this.activeItemIndex = (this.activeItemIndex - 1 + this.items.length) % this.items.length;
    }
  }

  setActive(index: number) {
    this.activeItemIndex = index;
    if (index === 0) {
      this.router.navigate(['home']);
    } else if (index === 1) {
      this.router.navigate(['branches']);
    }
  }

  isActive(index: number): boolean {
    return this.activeItemIndex === index;
  }
}
