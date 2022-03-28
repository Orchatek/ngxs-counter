import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {Animal} from "./animal.actions";
import Add = Animal.Add;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Select(state => state.animals) animals$: Observable<any> | undefined;

  constructor(
    private store: Store
  ) {
  }

  addAnimal(name: string) {
    this.store.dispatch(new Add(name));
  }
}
