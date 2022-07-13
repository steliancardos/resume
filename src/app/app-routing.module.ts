import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModelComponent } from './components/model/model.component';
import { ThreeComponent } from './components/three/three.component';
const routes: Routes = [ 
  {path:'',component:AppComponent},
  {path:'three',component:ThreeComponent},
  {path:'model',component:ModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
