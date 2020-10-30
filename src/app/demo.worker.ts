import { DoWork, ObservableWorker } from 'observable-webworker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@ObservableWorker()
export class DemoWorker implements DoWork<string, string> {

  public work(input$: Observable<any>): Observable<any> {

    return input$.pipe(
      map(data => {
        data.newData = data.data;
        return data;
      })
    );
  }

}
