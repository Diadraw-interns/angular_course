import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, Routes } from '@angular/router';

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
}
