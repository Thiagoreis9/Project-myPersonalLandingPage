import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { ContentComponent } from './screens/content/content.component';
import { CardInformationsComponent } from './components/card-informations/card-informations.component';
import { CardStacksComponent } from './components/card-stacks/card-stacks.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ApresentationComponent } from './screens/apresentation/apresentation.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProfileComponent,
    ContentComponent,
    CardInformationsComponent,
    CardStacksComponent,
    CertificationsComponent,
    ProjectsComponent,
    ApresentationComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
