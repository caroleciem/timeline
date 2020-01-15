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

card : Cards = { "name": "Facebook", "date": "2004-02-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg", "description": "Invention du plus célèbre réseau social" };
cardForm;  
constructor(private datasService: DatasService,
  private formBuilder: FormBuilder,) { 
    this.cardForm = this.formBuilder.group({
      name: '',
      date:'',
      imgUrl:'',
      description:'',
    })
  }

  ngOnInit() { this.card=this.card;
  }
  onSubmit(cardData) {
   
    
  }

}
