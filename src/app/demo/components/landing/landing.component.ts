import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
})
export class LandingComponent {
    home = true;
    pdf = false;
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
    subscriptions: Subscription = new Subscription();
    constructor(public layoutService: LayoutService, public router: Router, private route: ActivatedRoute) { 
        this.currentYear = new Date().getFullYear().toString();
        this.subscriptions.add(this.route.queryParams.subscribe((params: any) => {
            if (params.name || params.catagory) {
                this.pdf = true;
                this.home= false;
            } else {
                this.home = true;
                this.pdf = false;
            }
            
            
          }));
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
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case 'portfolio':
                this.home = false;
                this.portfolio = true;
                this.teams = false;
                this.careers = false;
                this.services = false;
                this.contact = false;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case 'teams':
                this.home = false;
                this.portfolio = false;
                this.teams = true;
                this.careers = false;
                this.services = false;
                this.contact = false;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case 'careers':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = true;
                this.services = false;
                this.contact = false;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case 'services':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = false;
                this.services = true;
                this.contact = false;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case 'contact':
                this.home = false;
                this.portfolio = false;
                this.teams = false;
                this.careers = false;
                this.services = false;
                this.contact = true;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            default:
                break;
        }
    }
    
}
