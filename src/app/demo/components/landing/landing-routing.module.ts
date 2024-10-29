import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        // { path: 'preview', component: PdfViewerComponent },
        { path: 'about', component: TeamsComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
