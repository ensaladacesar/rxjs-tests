import { Component } from '@angular/core';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';


const data = from('Hello world');
const apiData = ajax('https://server.hexbird.mx:3001/api/tasks/getTasks');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-tests';

  ngOnInit() {
    this.test1();
  }

  test1() {
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }

  test2() {
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));
  }

  test3() {
    apiData.subscribe(res => console.log(res.status, res.response));

  }

}
