import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResumeGeneratorComponent } from './components/resume-generator/resume-generator.component';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {MatButton} from '@angular/material/button'
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResumeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule, 
    MatButton,
    MatFormFieldModule,
    MatInput,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
