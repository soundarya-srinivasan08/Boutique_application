
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

username: string ='';
password: string ='';

  constructor(private router:Router){}

login(): void{

  if(this.username === 'admin' && this.password === 'password'){

    localStorage.setItem('username', this.username);

   this.router.navigate(['/home']);
  }else{
    alert('inavalid username or password');
  }
}



  registration():void{
    this.router.navigate(['/registration']);
  }



}
