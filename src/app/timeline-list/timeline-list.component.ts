import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import {Cards} from '../Cards';
import {Timeline} from '../timeline';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {

  timelineLists: Timeline[];

  constructor(
    private datasService: DatasService
  ) { }

  ngOnInit() {
    this.datasService.getTimelines().subscribe(dataList => this.timelineLists = dataList);
    this.datasService.timelineLists = this.timelineLists;
    console.log(this.timelineLists);
  }
  supprimerTimeline(timelineId) {
    this.datasService.supprimerTimeline(timelineId).subscribe (datalist => this.datasService.getTimelines());
  }

  transfertCardList(cardList) {
    this.datasService.getCardList(cardList);
  }

  transfertTimeline(timelineAMod) {
    if (timelineAMod.cardList.length !== 0 ) {
    this.datasService.timelineAMod = timelineAMod;
  } else {
    timelineAMod.cardList = [];
    this.datasService.timelineAMod = timelineAMod;
    }
  }

}
