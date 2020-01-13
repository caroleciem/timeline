import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {
  timelineList = this.datasService.timelineLists
  constructor(private datasService: DatasService) { }

  ngOnInit() {
  }
  supprimerTimeline(timelineId) {
    this.datasService.supprimerTimeline(timelineId);
  }

}
