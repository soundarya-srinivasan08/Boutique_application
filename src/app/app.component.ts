
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CasualwearComponent } from './components/casualwear/casualwear.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
 import { CartComponent } from './components/cart/cart.component';
import { BridalwearComponent } from './components/bridalwear/bridalwear.component';
import { WesternwearComponent } from './westernwear/westernwear.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CartComponent,NavbarComponent,ContactComponent,AboutusComponent,FooterComponent,HomeComponent,LoginComponent,RegistrationComponent,CasualwearComponent,BridalwearComponent,WesternwearComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
