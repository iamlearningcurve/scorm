import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
const routes: Routes = [
    { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)},
    { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always', useHash: true})],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}
