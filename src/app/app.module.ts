import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormContainerComponent } from '../assets/components/form-container.component';
import { HelperService } from '../assets/services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
