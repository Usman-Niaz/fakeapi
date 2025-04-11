import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent {
  // Properly inject ActivatedRoute and Router into the constructor
  constructor(
    private userService: UserService,
  ) {}

  users: any[] = [];
  showToast = false;
  newUser = {
    fname: '',
    lname: '',
    city: '',
    state: '',
    zipcode: ''
  };


  addUser(userForm: NgForm): void {
    if (userForm.invalid) {
      return;
    }

    this.userService.addUser(this.newUser).subscribe((data) => {
      this.users.push(data);

      // Show success toast
      this.showToast = true;

      // Hide the toast after 3 seconds
      setTimeout(() => {
        this.showToast = false;
      }, 1500);

      // Reset form and validation
      userForm.resetForm();
    });
  }
}
