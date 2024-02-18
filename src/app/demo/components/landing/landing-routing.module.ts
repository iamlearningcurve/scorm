import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        { path: 'about', component: TeamsComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
