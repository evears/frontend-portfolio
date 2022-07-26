import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './services/interceptor.service';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    HeaderComponent,
    LoginComponent,
    PortfolioComponent,
    ProjectsComponent,
    SkillsComponent,
    EditAboutmeComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    EditProjectComponent,
    NewProjectComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "showBackground": false,
      "startFromZero": false,
      "subtitleFontSize": "30",
      "subtitleColor": "#000000",
      "outerStrokeColor": "#c22478",
      "innerStrokeColor": "#a6d8ed",
      "titleFontSize": "30"
    })
  ],
  providers: [
    CookieService,
    ReactiveFormsModule,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
