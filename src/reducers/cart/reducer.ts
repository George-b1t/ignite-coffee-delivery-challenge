import { ActionTypes } from "./action";
import { produce } from "immer";

export interface Coffee {
  name: string;
  description: string;
  tags: string[];
  image: string;
  amount: number;
  count: number;
}

interface CartState {
  coffees: Coffee[];
}

function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.name === action.payload.coffeeName
      })

      if (currentCoffeeIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft.coffees[currentCoffeeIndex].count++;
      })
    }
    case ActionTypes.DECREASE_COFFEE: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.name === action.payload.coffeeName
      })

      if (currentCoffeeIndex < 0) {
        return state
      }

      return produce(state, draft => {
        if (draft.coffees[currentCoffeeIndex].count > 0) {
          draft.coffees[currentCoffeeIndex].count--;
        }
      })
    }
    default: {
      return state;
    }
  }
}

export { cartReducer }
