import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userId: string | null = null;
  newUser = { fname: '', lname: '', city: '', state: '', zipcode: '' };
  showToast = false; // For success message

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get user ID from URL
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.userId) {
      this.getUserDetails(this.userId);
    }
  }

  getUserDetails(id: string) {
    this.userService.getUserById(id).subscribe(user => {
      if (user) {
        this.newUser = user; // Populate form with user data
      }
    });
  }

  editUser() {
    if (this.userId) {
      this.userService.updateUser(this.userId, this.newUser).subscribe(() => {
        this.showToast = true; // Show success message
        
        // Hide the toast after 2 seconds and redirect
        setTimeout(() => {
          this.showToast = false;
          this.router.navigate(['/ui']); // Redirect to user list
        }, 2000);
      });
    }
  }
}
