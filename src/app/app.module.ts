import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarListComponent } from './car-list/car-list.component';

import { InMemoryDataService } from './services/InMemoryData/InMemoryData.service';
import { AddCarComponent } from './add-car/add-car.component';
import { CarItemComponent } from './car-item/car-item.component';

const appRoutes: Routes =[
    { path: '', component: LoginComponent },
    { path: 'car-list', component: CarListComponent },
    { path: 'add-car', component: AddCarComponent },
    { path: 'car-item', component: CarItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarListComponent,
    AddCarComponent,
    CarItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
