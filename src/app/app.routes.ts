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

export const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "for-directive-example", component: ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponentInputExampleComponent},
  {path: 'event-bind-example', component: EventBindExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
  {path: 'reactive-form-example', component: ReactiveFormExampleComponent},
  {path: 'eperson-template-driven-form', component: EpersonTemplateDrivenFormComponent},
  {path: 'component-output-example', component: ComponentOutputExampleComponent},
  {path: '', redirectTo:'/welcome', pathMatch:'full'}
];
