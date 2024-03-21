import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
