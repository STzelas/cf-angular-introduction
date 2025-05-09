import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DadJoke } from 'src/app/shared/interfaces/joke';

@Component({
  selector: 'app-http-client-example',
  imports: [ MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService)
  public dadJoke: string = ""
  public chuckNorrisJoke: string = ""

  /**
   * Το request του getDadJokes είναι promise
   * Όταν θα τρέξει θα μου επιστρέψει κάτι
   * για αυτό πρέπει να γράψω .subscribe
   */
  ngOnInit(): void {
    // this.jokesService
    // .getDadJokes()
    // .subscribe((data) => {
    //   console.log("DAD JOKE", data)
    //   console.log("Dad just Joke", data.joke)
    // })

    // this.jokesService
    // .getChuchNorrisJoke()
    // .subscribe((data) => {
    //   console.log("Chuck Norris JOKE", data)
    //   console.log("Chuck just Joke", data.value)
    // })

    this.refreshChuckNorrisJoke()
    this.refreshDadJoke()
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes()
        .subscribe((data) => {
          // console.log("New dad Joke -> ", data.joke)
          this.dadJoke = data.joke
        })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuchNorrisJoke()
        .subscribe((data) => {
          // console.log("New ChuckNorris Joke -> ", data.value)
          this.chuckNorrisJoke = data.value
        })
  }
}
