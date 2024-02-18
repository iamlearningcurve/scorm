import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
})
export class LandingComponent {
    home = true;
    portfolio = false;
    teams = false;
    careers = false;
    services = false;
    contact = false;
    currentYear: string;
    visible = false;
    visibleFaq = false;
    visibleTerms = false;
    visibleLegal = false;
    activeIndex = 0;
    constructor(public layoutService: LayoutService, public router: Router) { 
        this.currentYear = new Date().getFullYear().toString();
    }

    navToLogin() {
        // this.router.navigate(['../auth/login'])
    }

    switchPages(page: string) {
        switch (page) {
            case 'home':
                this.home = true;
                this.portfolio = false;
                this.teams = false;
                this.careers = false;
                this.services = false;
                this.contact = false;
                break;
            case 'portfolio':
                this.home = false;
                this.portfolio = true;
                this.teams = false;
                this.careers = false;
                this.services = false;
                this.contact = false;
                break;
            case 'teams':
                this.home = false;
                this.portfolio = false;
                this.teams = true;
                this.careers = false;
                this.services = false;
                this.contact = false;
                break;
            case 'careers':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = true;
                this.services = false;
                this.contact = false;
                break;
            case 'services':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = false;
                this.services = true;
                this.contact = false;
                break;
            case 'contact':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = false;
                this.services = false;
                this.contact = true;
                break;
            default:
                break;
        }
    }
    
}
