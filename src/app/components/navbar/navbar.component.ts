import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(private router:Router){}
  navigateTocasualwear(){
    this.router.navigate(['/casualwear']);
  }
   

   navigateTobridalwear(){
    this.router.navigate(['/bridalwear']);
   }
   
   navigateTowesternwear(){
   this.router.navigate(['/westernwear']);
   }

navigateToaboutus(){
  this.router.navigate(['/aboutus']);

}

navigateTocontact(){
  this.router.navigate(['/contact']);
}
 cart(){
  this.router.navigate(['/cart']);
 }


}
