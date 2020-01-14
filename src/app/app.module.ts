import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TimelineCardsComponent } from './timeline-cards/timeline-cards.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelineListComponent,
    TopbarComponent,
    TimelineCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: '', component: TimelineListComponent},
      {path: 'cards', component: TimelineCardsComponent},]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
