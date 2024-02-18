import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: false,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  constructor(public router: Router) { }
  navToLinkedIn(key: number) {
    let link: string
    switch (key) {
      case 1:
        link = "https://www.linkedin.com/in/ravikumar-konakere-64377911/";
        break;
      case 2: 
        link = "";
        break;
      case 3: 
        link = "https://www.linkedin.com/in/sowmya-arun5982";
        break;
      case 4: 
        link = "https://www.linkedin.com/in/misha-wadhwa-sardana-080861189";
        break; 
      default:
        break;
    }
    document.location.href = link;

  }

}