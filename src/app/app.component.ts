import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clickEventsubscription: Subscription = new Subscription;
  
  title = 'resume';
  
  @ViewChild("container", { read: ViewContainerRef  }) container!: ViewContainerRef ;

  constructor(private resolver: ComponentFactoryResolver, private sharedService:SharedService) {
    this.clickEventsubscription=    this.sharedService.getClickEvent().subscribe(()=>{
      this.loadComponent();  
    });
  }

  loadComponent(){
    this.container.clear();
    
    switch (this.sharedService.componentId){
      case 1:
        let factoryProjects = this.resolver.resolveComponentFactory(ProjectsComponent);
        this.container.createComponent(factoryProjects);
        break;
      case 2:
        let factoryExperience = this.resolver.resolveComponentFactory(ExperienceComponent);
        this.container.createComponent(factoryExperience);
        break;
      case 3:
        let factoryContact = this.resolver.resolveComponentFactory(ContactComponent);
        this.container.createComponent(factoryContact);
        break;
    }
  }
}
