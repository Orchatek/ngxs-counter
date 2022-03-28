import {Action, State, StateContext} from "@ngxs/store";
import {DecreaseCounter, IncreaseCounter} from "./counter.actions";
import {Injectable} from "@angular/core";

export interface CounterStateModel {
  value: number;
}

@State<number>({
  name: 'counter',
  defaults: 0
})
@Injectable()
export class CounterState {

  @Action(IncreaseCounter)
  increaseCounter(ctx: StateContext<number>) {
    ctx.setState((state) => state + 1)
  }

  @Action(DecreaseCounter)
  decreaseCounter(ctx: StateContext<number>) {
    ctx.setState((state) => state - 1)
  }
}
