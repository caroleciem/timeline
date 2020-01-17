import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { FormBuilder } from '@angular/forms';
import { Cards } from '../Cards';

@Component({
  selector: 'app-timeline-cards',
  templateUrl: './timeline-cards.component.html',
  styleUrls: ['./timeline-cards.component.css']
})

export class TimelineCardsComponent implements OnInit {
  cardsFounds = this.datasService.cardsFounds;
  guessDateForm;
  card: Cards = this.datasService.renewCard();
  cardList = this.datasService.cardList;
  index = this.datasService.index;
  

  constructor(
    private datasService: DatasService,
    private formBuilder: FormBuilder,
  ) {
    this.guessDateForm = this.formBuilder.group({
      date: '',
    });
  }

  ngOnInit() {
  }

  passCard() {
    this.card = this.datasService.renewCard();
  }

  onSubmit(guessedDate) {
    if (isNaN(guessedDate.date) == true) {
      alert('la date doit être entre 0 et 3000');
      this.guessDateForm.reset();
      return false;
    }
    if ((guessedDate.date > -1) && (guessedDate.date < 3000))  {
      if (guessedDate.date == this.card.date.substr(0, 4)) {
        //console.log('ok');
        this.datasService.cardsFounds.push(this.card);
        console.log('indice supprimlé ', this.index);
        this.datasService.cardList.splice(this.datasService.index, 1);
        this.card = this.datasService.renewCard();
        this.guessDateForm.reset();
        console.log(this.cardsFounds, this.cardList);
        return true;
      } else {
        this.guessDateForm.reset();
        alert('Ce n\'est pas la bonne date, réessayez!!!!');
      }

    } else {
      alert('la date doit être entre 0 et 3000');
      // et on indique de ne pas envoyer le formulaire
      this.guessDateForm.reset();
      return false;
    }
    
  }
  
}
