import { Component } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-numbers';

  runWorker() {

    const input$: Observable<any> = of({data: [1,2,3,4], newData:[]});

    fromWorker<string, string>(() => new Worker('./demo.worker', { type: 'module'}), input$)
      .subscribe(message => {
        console.log(`Got message`, message);
      });

  }
  
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}