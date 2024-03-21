import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Componentes
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // As rotas depois de logada serao adicionado aqui. que ficara localhost:4200/admin/dashboard ou localhost:4200/admin/account
  // {
  //   path: 'dashboard',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'account',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
