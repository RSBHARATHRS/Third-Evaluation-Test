import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {

  facebookIconPath: string;
  content: string;
  constructor(private dataService:DataService) {
    this.facebookIconPath = "../../assets/icons/Facebook.png"
    this.content = this.dataService.imageGridCOntent;
   }

  ngOnInit(): void {
  }

}
