import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) } //lazy loading 
  //loadChildren => sadece cards rotası çalıştığı zaman CardsModule ü yükle. Projenin ilk açılış süresi ve boyutunda etkili
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
