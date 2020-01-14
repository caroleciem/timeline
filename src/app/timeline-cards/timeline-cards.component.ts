import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-timeline-cards',
  templateUrl: './timeline-cards.component.html',
  styleUrls: ['./timeline-cards.component.css']
})
export class TimelineCardsComponent implements OnInit {
  cardsFounds = this.datasService.cardsFounds;
  guessDateForm;

  constructor(
    private datasService: DatasService,
    private formBuilder: FormBuilder,
    ) {
      this.guessDateForm = this.formBuilder.group({
        guessedDate: '',
      });
  }

  ngOnInit() {
  }

  onSubmit(guessDate) {}
}
