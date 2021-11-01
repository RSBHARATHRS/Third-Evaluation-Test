import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-a-test-center',
  templateUrl: './find-a-test-center.component.html',
  styleUrls: ['./find-a-test-center.component.css']
})
export class FindATestCenterComponent implements OnInit {
  testCenterName: string;
  constructor() {
    this.testCenterName = "";
  }

  ngOnInit(): void {
  }

}
