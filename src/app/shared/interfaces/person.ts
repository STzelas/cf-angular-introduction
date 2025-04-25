// Λέμε τον τύπο που έχουν τα object στο app.component.ts
export interface Address {
  area: string
  road: string
}

export interface Person {
  givenName: string
  surname: string
  age: number
  email: string
  address: string
  // address: Address

}
