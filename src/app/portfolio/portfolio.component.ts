import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  Cards: Array<any> = [
    {
      name: 'WEB DESIGN',
      isGray: true,
    },
    {
      name: 'MOBILE DESIGN',
      isGray: false,
    },
    {
      name: 'LOGO DESIGN',
      isGray: true,
    },
    {
      name: 'WEB APP DEVELOPMENT',
      isGray: false,
    },
    {
      name: 'MOBILE APP DEVELOPMENT',
      isGray: true,
    },
    {
      name: 'PWA DEVELOPMENT',
      isGray: false,
    },
  ];
}
