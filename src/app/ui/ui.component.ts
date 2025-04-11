import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, RouterLink } from '@angular/router';  // Import Router
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-ui',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  users: any[] = [];
  ico = faTrash;
  edit=faEdit
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
}
