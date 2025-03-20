import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { CalculatorService } from './calculator.service';
import { FactorailService } from './factorail.service';


const ROUTES : Routes = [
  { path : 'Home' , component : HomeComponent},
  { path : 'Contact' , component : ContactComponent},
  { path : 'About' , component : AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    CalculatorService,
    FactorailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
