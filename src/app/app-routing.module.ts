import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  //about me
  { path: 'editperso/:id', component: EditAboutmeComponent },
  //experiencia
  { path: 'nuevaexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  //educacion
  { path: 'nuevaedu', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  //proyecto
  { path: 'nuevoproye', component: NewProjectComponent },
  { path: 'editproye/:id', component: EditProjectComponent },
  //skills
  { path: 'nuevahab', component: NewSkillComponent },
  { path: 'edithab/:id', component: EditSkillComponent },

  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
