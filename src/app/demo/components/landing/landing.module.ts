import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './components/home/home.component';

import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TeamsComponent } from './components/teams/teams.component';
import { MenuModule } from 'primeng/menu';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { CareersComponent } from './components/careers/careers.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { ServicesComponent } from './components/services/services.component';
import { ChipModule } from 'primeng/chip';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { ContactComponent } from './components/contact/contact.component';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        MenuModule,
        InputMaskModule,
        CheckboxModule,
        DataViewModule,
        TagModule,
        DialogModule,
        FormsModule, ReactiveFormsModule,
        CardModule,
        BreadcrumbModule,
        AccordionModule,
        TabViewModule,
        ChipModule,
        FileUploadModule,
        RatingModule,
        AvatarModule,
        ToastModule,
        BadgeModule
    ],
    declarations: [
        LandingComponent, 
        HomeComponent, 
        TeamsComponent, 
        PortfolioComponent,
        CareersComponent,
        ServicesComponent,
        ContactComponent
    ] 
})
export class LandingModule { }
