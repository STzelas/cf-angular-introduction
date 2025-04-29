import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-input-example',
  imports: [],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Xristos',
    surname: "Fragkos",
    age: 30,
    email: "cxristos@aueb.gr",
    address: "New York, USA",
  }

  person1: Person = {
    givenName: 'John',
    surname: 'Doe',
    age: 0,
    email: 'john@aueb.gr',
    address: 'Athens, Greece'
  }
}
