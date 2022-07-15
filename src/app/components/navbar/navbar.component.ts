import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  loadComponent(component: number): void {
    this.sharedService.componentId = component;
    this.sharedService.sendClickEvent();
  }

}
