import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';

  onSubmit() {
    // Placeholder for form submission logic
    console.log('Submitted email:', this.email);
    // Reset email after submission
    this.email = '';
  }
}
