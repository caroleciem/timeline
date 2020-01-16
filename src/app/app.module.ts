import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TimelineCardsComponent } from './timeline-cards/timeline-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimelineEditComponent } from './timeline-edit/timeline-edit.component';
import { TimelineCardEditComponent } from './timeline-card-edit/timeline-card-edit.component';
import { CardAjoutComponent } from './card-ajout/card-ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineListComponent,
    TopbarComponent,
    TimelineCardsComponent,
    TimelineEditComponent,
    TimelineCardEditComponent,
    CardAjoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: '', component: TimelineListComponent},
      {path: 'cards', component: TimelineCardsComponent},
      {path: 'editTimeline', component:  TimelineEditComponent},
      {path: 'ajoutCard', component:  CardAjoutComponent},
      {path: 'editCard', component:  TimelineCardEditComponent}
      ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
