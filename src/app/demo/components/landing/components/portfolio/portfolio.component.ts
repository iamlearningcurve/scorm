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
    {name: 'E-Learning', value: 0},
    {name: 'ILT', value: 1},
    {name: 'Graduate Content(UG and PG)', value: 2},
    {name: 'K12', value: 3},
    {name: 'Other content dev and multimedia', value: 4}
  ]
  actualVideo = false;
  cancelPause = false;
  constructor(public router: Router) { }

  scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }

  playVideo() {
    var iframe = document.querySelector('iframe');
    if ( iframe && !this.actualVideo) {
      var iframeSrc = 'https://www.youtube.com/embed/3gRYUJnDhd0?si=9FFMAtTjhpNhTIg9&autoplay=1&mute=1&start=0&end=60';
      iframe.src = iframeSrc;
    }
    var iframe = document.querySelector('iframe');
  }

  pauseVideo() {
    var iframe = document.querySelector('iframe');
    if ( iframe && !this.actualVideo) {
      var iframeSrc = 'https://www.youtube.com/embed/3gRYUJnDhd0?si=9FFMAtTjhpNhTIg9';
      iframe.src = iframeSrc;
    }
  }

  playActualVideo() {
    this.actualVideo = true;
    setTimeout(() => {

    }, 12)    
  }
}
