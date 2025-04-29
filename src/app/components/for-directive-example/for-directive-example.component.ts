import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [ PersonTableComponent, ],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person [] = 
  [{
    "givenName": "Selig",
    "surname": "Wilkin",
    "email": "swilkin0@163.com",
    "age": 1,
    "address": "8th Floor"
  }, {
    "givenName": "Shirlee",
    "surname": "Berthelet",
    "email": "sberthelet1@eepurl.com",
    "age": 2,
    "address": "18th Floor"
  }, {
    "givenName": "Rollins",
    "surname": "Wikey",
    "email": "rwikey2@cafepress.com",
    "age": 3,
    "address": "Room 1322"
  }, {
    "givenName": "Kizzee",
    "surname": "Glasser",
    "email": "kglasser3@t-online.de",
    "age": 4,
    "address": "Room 396"
  }, {
    "givenName": "Max",
    "surname": "Chapman",
    "email": "mchapman4@twitpic.com",
    "age": 5,
    "address": "PO Box 70830"
  }, {
    "givenName": "Arabelle",
    "surname": "Bruckner",
    "email": "abruckner5@ask.com",
    "age": 6,
    "address": "PO Box 52425"
  }, {
    "givenName": "Darrell",
    "surname": "Townson",
    "email": "dtownson6@webs.com",
    "age": 7,
    "address": "Suite 94"
  }, {
    "givenName": "Arvin",
    "surname": "Colliar",
    "email": "acolliar7@ehow.com",
    "age": 8,
    "address": "14th Floor"
  }, {
    "givenName": "Hamilton",
    "surname": "Verrier",
    "email": "hverrier8@google.co.jp",
    "age": 9,
    "address": "Room 651"
  }, {
    "givenName": "Jamill",
    "surname": "Ascroft",
    "email": "jascroft9@berkeley.edu",
    "age": 10,
    "address": "Apt 577"
  }, {
    "givenName": "Hunt",
    "surname": "Wiltsher",
    "email": "hwiltshera@smh.com.au",
    "age": 11,
    "address": "PO Box 31615"
  }, {
    "givenName": "Kellsie",
    "surname": "Case",
    "email": "kcaseb@php.net",
    "age": 12,
    "address": "Room 643"
  }, {
    "givenName": "Tiffanie",
    "surname": "Aubri",
    "email": "taubric@sourceforge.net",
    "age": 13,
    "address": "2nd Floor"
  }, {
    "givenName": "Courtenay",
    "surname": "Summerside",
    "email": "csummersided@marketwatch.com",
    "age": 14,
    "address": "Suite 94"
  }, {
    "givenName": "Edwin",
    "surname": "O'Roan",
    "email": "eoroane@google.fr",
    "age": 15,
    "address": "Apt 279"
  }, {
    "givenName": "Cross",
    "surname": "Di Pietro",
    "email": "cdipietrof@amazon.de",
    "age": 16,
    "address": "15th Floor"
  }, {
    "givenName": "Lin",
    "surname": "Phipp",
    "email": "lphippg@dell.com",
    "age": 17,
    "address": "Room 1603"
  }, {
    "givenName": "Marsiella",
    "surname": "Antonnikov",
    "email": "mantonnikovh@phpbb.com",
    "age": 18,
    "address": "PO Box 71572"
  }, {
    "givenName": "Duke",
    "surname": "Jakeway",
    "email": "djakewayi@google.com.br",
    "age": 19,
    "address": "Room 1526"
  }, {
    "givenName": "Westbrook",
    "surname": "Larive",
    "email": "wlarivej@mail.ru",
    "age": 20,
    "address": "Suite 34"
  }]
}
