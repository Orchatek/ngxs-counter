import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {DecreaseCounter, IncreaseCounter} from "./counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {

  counter$: Observable<any> | undefined;

  constructor(
    public store: Store
  ) {
    this.counter$ = this.store.select(state => state.counter.value);
  }

  decreaseCounter() {
    this.store.dispatch(new DecreaseCounter())
  }

  increaseCounter() {
    this.store.dispatch(new IncreaseCounter())
  }
}
