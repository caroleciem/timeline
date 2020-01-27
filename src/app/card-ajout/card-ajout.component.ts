import { Component, OnInit } from '@angular/core';
import { Cards } from '../Cards';
import { FormBuilder } from '@angular/forms';
import { DatasService } from '../datas.service';


@Component({
  selector: 'app-card-ajout',
  templateUrl: './card-ajout.component.html',
  styleUrls: ['./card-ajout.component.css']
})
export class CardAjoutComponent implements OnInit {
  cardAjForm;
  card: Cards;
  maxId:number;
  constructor(private datasService: DatasService,
              private formBuilder: FormBuilder, ) {
    this.cardAjForm = this.formBuilder.group({
      name: '',
      date: '',
      imgUrl: '',
      description: '',
    })
  }

  ngOnInit() {
  }
  onSubmit(cardData) {
    if (cardData.name == "") {
      alert('le nom doit être renseigné');

      return false;
    }
    if (cardData.date == "") {
      alert('la date doit être renseignée');

      return false;
    }


    if ((isNaN(cardData.date.substr(0, 4)) == true) || (cardData.date.substr(0, 4) < 0) || (cardData.date.substr(0, 4) > 3000)) {
      alert('l\'année doit être numérique et comprise entre 0 et 3000');

      return false;
    }
    if ((isNaN(cardData.date.substr(5, 2)) == true) || (cardData.date.substr(5, 2) < 1) || (cardData.date.substr(5, 2) > 12)) {
      alert('le mois doit être numérique et compris entre 1 et 12');

      return false;
    }
    if ((isNaN(cardData.date.substr(8, 2)) == true) || (cardData.date.substr(8, 2) < 1) || (cardData.date.substr(8, 2) > 31)) {
      alert('le jour doit être numérique et compris entre 1 et 31');

      return false;
    }

    if (cardData.imgUrl == "") {
      cardData.imgUrl = " ";
    }
    if (cardData.description == "") {
      cardData.description = " ";
    }

    this.card.name = cardData.name;
    this.card.date = cardData.date;
    this.card.imageUrl = cardData.imgUrl;
    this.card.description = cardData.description;

    this.card.id= this.datasService.maxId;
    this.datasService.ajCards(this.card);

  }
}
