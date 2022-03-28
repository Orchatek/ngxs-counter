import {Action, State, StateContext} from "@ngxs/store";
import {DecreaseCounter, IncreaseCounter} from "./counter.actions";
import {Injectable} from "@angular/core";

export interface CounterStateModel {
  value: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    value: 0
  }
})
@Injectable()
export class CounterState {

  @Action(IncreaseCounter)
  increaseCounter(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: state.value + 1
    })
  }

  @Action(DecreaseCounter)
  decreaseCounter(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: state.value - 1
    })
  }
}
