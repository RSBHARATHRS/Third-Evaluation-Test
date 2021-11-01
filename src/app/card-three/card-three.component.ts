import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.css']
})
export class CardThreeComponent implements OnInit {
  imgPaths: any;
  content: string;
  constructor(private imgPathService:ImgPathService,private dataService:DataService) {
    this.content = '';
  }

  ngOnInit(): void {
    this.imgPaths = this.imgPathService.getCardThreeImgPaths();
    this.content = this.dataService.cardTreeContent;
  }



}
