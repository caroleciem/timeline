import { Component, OnInit } from '@angular/core';
import{DatasService} from '../datas.service';

@Component({
  selector: 'app-timeline-cards',
  templateUrl: './timeline-cards.component.html',
  styleUrls: ['./timeline-cards.component.css']
})
export class TimelineCardsComponent implements OnInit {
  cardsFounds= this.datasService.cardsFounds;

  constructor(private datasService: DatasService) { }

  ngOnInit() {
  }

}
