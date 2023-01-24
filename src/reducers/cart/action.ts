import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  DECREASE_COFFEE = 'DECREASE_COFFEE',
}

export function addCoffeeAction(coffeeName: string) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffeeName
    }
  }
}

export function decreaseCoffeeAction(coffeeName: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE,
    payload: {
      coffeeName
    }
  }
}
