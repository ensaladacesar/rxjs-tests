import { Component } from '@angular/core';
import { from } from 'rxjs';
import { interval } from 'rxjs';


const data = from(fetch('https://server.hexbird.mx:3001/api/tasks/getTasks'));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-tests';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    data.subscribe({
      next(response) { console.log(response.body); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));
  }

}
