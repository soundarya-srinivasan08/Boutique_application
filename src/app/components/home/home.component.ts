import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) { }//dependency injection

  username: string = '';

  ngOnInit(): void {
    // Retrieve the username from local storage and set it to an empty string if it's null
    this.username = localStorage.getItem('username') || 'Guest';
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  
}
