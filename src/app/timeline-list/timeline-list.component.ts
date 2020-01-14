import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {
  
  timelineList;

  constructor(
    private datasService: DatasService,
    ) { }

  ngOnInit() {
    this.datasService.getTimelines().subscribe(dataList => this.timelineList = dataList);
  }
  supprimerTimeline(timelineId) {
    this.datasService.supprimerTimeline(timelineId
      );
  }

  transfertCardList(cardList) {
    this.datasService.getCardList(cardList);
  }

}
