import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { EpersonTemplateDrivenFormComponent } from './components/eperson-template-driven-form/eperson-template-driven-form.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// GUARDS
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';
import { RestrictedContentComponent } from './components/restricted-content/restricted-content.component';

export const routes: Routes = [
  {path: "for-directive-example", component: ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponentInputExampleComponent},
  {path: 'event-bind-example', component: EventBindExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
  {path: 'reactive-form-example', component: ReactiveFormExampleComponent},
  {path: 'eperson-template-driven-form', component: EpersonTemplateDrivenFormComponent},
  {path: 'component-output-example', component: ComponentOutputExampleComponent},
  {path: 'http-client-example', component: HttpClientExampleComponent, canActivate: [authGuard, adminRoleGuard]},
  {path: 'user-registration', component:UserRegistrationComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "user-login", component: UserLoginComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "restricted-content", component: RestrictedContentComponent},
  {path: '', redirectTo:'/welcome', pathMatch:'full'}
];
