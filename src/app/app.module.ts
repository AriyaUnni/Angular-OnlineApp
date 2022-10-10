import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CollectionComponent } from './collection/collection.component';
import { SpecialComponent } from './special/special.component';
import { WomensComponent } from './womens/womens.component';
import { WomenComponent } from './women/women.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"collection",component:CollectionComponent
  },
  {
    path:"specials",component:SpecialComponent
  },
  {
    path:"womens",component:WomensComponent
  },
  {
    path:"women",component:WomenComponent
  },
  {
    path:"mens",component:MensComponent
  },
  {
    path:"kids",component:KidsComponent
  },
  {
    path:"about",component:AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CollectionComponent,
    SpecialComponent,
    WomensComponent,
    WomenComponent,
    MensComponent,
    KidsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
