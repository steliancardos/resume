import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  loadComponent(component: number): void {
    this.sharedService.componentId = component;
    this.sharedService.sendClickEvent();
  }
}
