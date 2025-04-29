import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import {sortBy} from 'lodash-es'

@Component({
  selector: 'app-simple-data-table',
  imports: [],
  templateUrl: './simple-data-table.component.html',
  styleUrl: './simple-data-table.component.css'
})
export class SimpleDataTableComponent {
  @Input() data: EPerson[] | undefined

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson) {
    console.log(sortKey)
  }

  onPersonClicked(person: EPerson) {
    console.log("Person ->>> ", person)
  } 
}
