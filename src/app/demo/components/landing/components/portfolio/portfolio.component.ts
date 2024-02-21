import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  tabNumber = 0;
  portfolioList = [
    {name: 'Content Development', value: 0},
    {name: 'E-Learning', value: 1},
    {name: 'ILT', value: 2},
    {name: 'K12', value: 3},
    {name: 'UG & PG Content', value: 4},
    {name: 'others', value: 5}
  ]
  constructor(public router: Router) { }

}
