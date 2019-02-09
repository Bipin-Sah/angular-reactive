import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { FavoriteColorComponent } from './favorite-color/favorite-color.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteColorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  //  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
