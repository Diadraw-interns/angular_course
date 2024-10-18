import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { OnDemandPreloadStrategy } from '../../strategies/on-demand-preload-strategy';
import { OnDemandPreloadService } from '../../strategies/on-demand-preload-strategy.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  routes = [
    {
      path: 'sing-in',
      label: 'Sing in',
    },
    {
      path: 'dashboard',
      label: 'Dashboard',
    },
    {
      path: 'about',
      label: 'About',
    },
  ];

  constructor(private onDemandPreloadStrategySvc: OnDemandPreloadService) {}

  onHover(path: string) {
    console.log(path);
    this.onDemandPreloadStrategySvc.startPreload(path);
  }
}
