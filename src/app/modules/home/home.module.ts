import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';


@NgModule({
  declarations: [LandingComponent, NavPanelComponent, MainPanelComponent, ChatPanelComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
