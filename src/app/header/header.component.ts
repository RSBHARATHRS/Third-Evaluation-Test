import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoPath: string;
  displayProperty: string;

  constructor(private router:Router) {
    this.logoPath = "../../assets/logo/IETLS.svg";

    this.displayProperty = "none";
  }

  goToHome() {
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
  }

  displaySubNav() {
    this.displayProperty = "block";
  }

  hideSubNav() {
    this.displayProperty = "none";
  }
}
