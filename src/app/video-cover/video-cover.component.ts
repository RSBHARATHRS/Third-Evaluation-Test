import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-video-cover',
  templateUrl: './video-cover.component.html',
  styleUrls: ['./video-cover.component.css']
})
export class VideoCoverComponent implements OnInit {

  content: string;
  constructor(private dataService: DataService) {
    this.content = "";
   }

  ngOnInit(): void {
    this.content = this.dataService.videoSectionContent;
  }

}
