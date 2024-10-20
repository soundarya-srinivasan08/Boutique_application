import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CasualwearComponent } from './components/casualwear/casualwear.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// import { CartComponent } from './components/cart/cart.component';
import { BridalwearComponent } from './components/bridalwear/bridalwear.component';
import { WesternwearComponent } from './westernwear/westernwear.component';
import { NgModule } from '@angular/core';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';


export const routes: Routes = [
{path:"",component: HomeComponent},
{path:'navbar',component :NavbarComponent},
{path:'footer', component :FooterComponent},
 {path:'cart',component: CartComponent},
{path:'login',component: LoginComponent},
{path:'registration',component: RegistrationComponent},
{path:'casualwear',component: CasualwearComponent},
{path:'bridalwear',component: BridalwearComponent},
{path: 'westernwear', component: WesternwearComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'contact', component:ContactComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule{}