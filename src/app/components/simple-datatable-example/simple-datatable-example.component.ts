import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { ManyPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-simple-datatable-example',
  imports: [ SimpleDataTableComponent, ],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;
}
