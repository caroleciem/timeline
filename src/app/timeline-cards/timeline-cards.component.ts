import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { FormBuilder } from '@angular/forms';
import {Cards} from '../Cards';

@Component({
  selector: 'app-timeline-cards',
  templateUrl: './timeline-cards.component.html',
  styleUrls: ['./timeline-cards.component.css']
})

export class TimelineCardsComponent implements OnInit {
  cardsFounds = this.datasService.cardsFounds;
  guessDateForm;
  card: Cards = this.datasService.cardList[2];
  cardList = this.datasService.cardList;

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

  onSubmit(guessedDate) {
    if (guessedDate == this.card.date){
      console.log("ok");
      this.cardsFounds.push(this.card);
      this.cardList.splice(2,1);
      console.log(this.cardList);
    }else {
      console.log(guessedDate);
      console.log(this.card.date);
      console.log("ko"); 
     
    }
    this.guessDateForm.reset();  
  }
}
