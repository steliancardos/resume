import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { WorkPlace } from '../../models/WorkPlace';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExperiences!: WorkPlace[];

  constructor(private data: DataService) {
    this.workExperiences = [];
   }

  ngOnInit(): void { 
    this.workExperiences = this.data.getExperience();
  }
}
