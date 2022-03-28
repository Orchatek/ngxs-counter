import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {DecreaseCounter, IncreaseCounter} from "./counter.actions";
import {CounterState} from "./counter.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {

  @Select(CounterState) counter$: Observable<any> | undefined;

  constructor(
    public store: Store
  ) {
  }

  decreaseCounter() {
    this.store.dispatch(new DecreaseCounter())
  }

  increaseCounter() {
    this.store.dispatch(new IncreaseCounter())
  }
}
