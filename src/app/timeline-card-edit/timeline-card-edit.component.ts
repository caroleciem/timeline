import { Component, OnInit } from '@angular/core';
import { Cards } from '../Cards';
import { FormBuilder } from '@angular/forms';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-timeline-card-edit',
  templateUrl: './timeline-card-edit.component.html',
  styleUrls: ['./timeline-card-edit.component.css']
})
export class TimelineCardEditComponent implements OnInit {

  //card: Cards = { "name": "Facebook", "date": "2004-02-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg", "description": "Invention du plus célèbre réseau social" };
  card :Cards = this.datasService.cardAMod;
  cardForm;
  constructor(private datasService: DatasService,
    private formBuilder: FormBuilder, ) {
    this.cardForm = this.formBuilder.group({
      name: '',
      date: '',
      imgUrl: '',
      description: '',
    })
  }

  ngOnInit() {
  }

  onSubmit(cardData) {
    
    if ((cardData.name == "") && (cardData.date == "") && (cardData.imgUrl == "") && (cardData.description == "")){
      alert('Aucun champ n\'a été modifié' )
    }

    if (cardData.name == "") {
      cardData.name = this.card.name;
      
    }

    if (cardData.date != "") {
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
    } else{
      cardData.date = this.card.date;
     
    }

    if (cardData.imgUrl == "") {
      cardData.imgUrl = this.card.imageUrl
    }
    if (cardData.description == "") {
     cardData.description = this.card.description;
    }
    this.card.name = cardData.name;
    this.card.date =cardData.date;
    this.card.imageUrl=cardData.imgUrl;
    this.card.description=cardData.description;
    this.datasService.majCards(this.card);


  }

}
