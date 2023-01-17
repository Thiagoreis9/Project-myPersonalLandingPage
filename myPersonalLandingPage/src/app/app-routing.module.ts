import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentationComponent } from './screens/apresentation/apresentation.component';
import { ContentComponent } from './screens/content/content.component';

const routes: Routes = [{
  path: 'content',
  component: ContentComponent
},
{
  path: '**',
  component: ApresentationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
