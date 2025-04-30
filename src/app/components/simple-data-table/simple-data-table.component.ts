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

  // Θα βάλει sort στην λίστα ανάλογα το πεδίο (key) που πατάμε πχ givenName
  sortData(sortKey: keyof EPerson): void { // Δεν  θα επιστρέψει κάτι απλά θα κάνει sort
    console.log(sortKey)
    if(this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.data = sortBy(this.data, sortKey).reverse()
    } else {
      this.sortOrder[sortKey] = 'asc'
      this.data = sortBy(this.data, sortKey) // μόνο asc τα κάνει η sortBy()
    }
    
    for (let key in this.sortOrder) {
      if(key !== sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none';
      }
    }
    console.log(this.sortOrder)
  }

  sortSign(sortKey: keyof EPerson): string {
    if(this.sortOrder[sortKey] === 'asc') {
      return '\u2191'
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '\u2193'
    } else
    return ''
  }

  onPersonClicked(person: EPerson) {
    console.log("Person ->>> ", person)
  } 
}
