import { Component, OnInit } from '@angular/core';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent implements OnInit {

  cardTwoSubTitle: string;
  imgPaths: any;
  constructor(private imgService:ImgPathService) {
    this.cardTwoSubTitle = "IELTS Writing Task 2: 8 steps towards a Band 8";
  }

  ngOnInit(): void {
    this.imgPaths = this.imgService.getCardTwoImgPaths();
  }

}
