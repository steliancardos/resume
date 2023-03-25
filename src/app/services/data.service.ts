import { Injectable } from '@angular/core';
import { WorkPlace } from '../models/WorkPlace';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getExperience(): WorkPlace[]{
    let workExperiences: WorkPlace[] = [];
    workExperiences.push(this.talentingSoftwareExperience());
    workExperiences.push(this.nttDataExperience());
    workExperiences.push(this.grundrissSoftwareExperience());
    workExperiences.push(this.estrategySoftwareExperience());
    return workExperiences;
  }

  talentingSoftwareExperience(): WorkPlace{
    let ts = new WorkPlace();
    ts.iconPath = "assets/workplace/ts.png";
    ts.jobDescription = "Responsible for supervising, managing and motivating team members. Contact point for all team members, "+
    "able to act proactively to ensure smooth team operations and effective collaboration.Lead by setting a good example and engage the team to achieve goals.Writing code and testing code written by others, and debugging code to fix errors in logic or performance";
    ts.startDate = this.getDate('2020-12-01');
    ts.endDate = "Current";
    ts.location = "Brasov/Remote";
    ts.name = "Talenting Software";
    ts.role = "Lead developer";
    this.setTehnologyStack(ts.tehnology);
    return ts;
  }


  grundrissSoftwareExperience(): WorkPlace{
    let ts = new WorkPlace();
    ts.iconPath = "assets/workplace/vivajo.svg";
    ts.jobDescription = "Developing applications and design patterns through problem solving techniques.Supported designing and development of software with C# and .Net applications."
    + "Implementing mobile and embedded platforms such as Android for user interface systems.";
    ts.startDate = this.getDate('2017-07-1');
    ts.endDate = this.getDate('2019-06-01');
    ts.location = "Cluj Napoca";
    ts.name = "Vivajo";
    ts.role = "Senior developer";
    this.setTehnologyStack(ts.tehnology);
    return ts;
  }

  
  estrategySoftwareExperience(): WorkPlace{
    let ts = new WorkPlace();
    ts.iconPath = "assets/workplace/estrategy.png";
    ts.jobDescription = "Developing and maintenance Web Based Aplication using C Sharp and ASP.NET";
    ts.startDate = this.getDate('2017-07-1');
    ts.endDate = this.getDate('2017-02-2');
    ts.location = "Goes, Holland";
    ts.name = "Estrategy";
    ts.role = "Software developer";
    this.setTehnologyStack(ts.tehnology);
    return ts;
  }

  nttDataExperience(): WorkPlace{
    let ntt = new WorkPlace();
    ntt.iconPath = "assets/workplace/ntt.jpeg";
    ntt.jobDescription = "Create an inspiring team environment with an open communication culture and work closely with senior stakeholders to understand business goals and ensure that the development team & technologies used are aligned with these while writing testable, scalable and efficient code and leading code reviews.";
    ntt.startDate = this.getDate('2019-06-01') ;
    ntt.endDate =  this.getDate('2020-12-01');
    ntt.location = "Cluj Napoca";
    ntt.name = "NTT Data";
    ntt.role = "Lead developer";
    this.setTehnologyStack(ntt.tehnology);
    return ntt;
  }

  getDate(dateString: string): string{
    let date= new Date(dateString);
      return date.getDay() + '.' +date.getMonth() + '.' + date.getFullYear();
  }

  setTehnologyStack(tehnologyStack: string[] ) { 
    tehnologyStack.push("ASP.NET, C#, ASP.NET Core, Entity Framework, .NET Web Services, REST, WEB API, MVC");
    tehnologyStack.push(" Angular 7+, React, TypeScript");
    tehnologyStack.push("Git, Azure DevOps");
    tehnologyStack.push("SQL Server, MySql");
  }
}
