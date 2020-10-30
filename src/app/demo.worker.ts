import {DoWork, ObservableWorker} from 'observable-webworker';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@ObservableWorker()
/**
 * Adds two numbers together.
 */
export class DemoWorker implements DoWork<string, string> {
  /**
 * Adds two numbers together.
 * @param {Observable} input$ The second number.
 * @return {int} The sum of the two numbers.
 */
  public work(input$: Observable<any>): Observable<any> {
    return input$.pipe(
        map((data) => {
          data.newData = data.data;
          return data;
        }),
    );
  }
}
