import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AsciiComponent } from './ascii.components/ascii.component';
import { RegexComponent } from './regex.components/regex.component';

@NgModule({
  declarations: [
    AppComponent,
    AsciiComponent,
    RegexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'ascii',
        component: AsciiComponent
      },
      {
        path: 'regex',
        component: RegexComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
