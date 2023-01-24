import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeAction, decreaseCoffeeAction } from "../reducers/cart/action";
import { cartReducer, Coffee } from "../reducers/cart/reducer";
import { coffeesData } from "../services/coffees";

interface CartContextType {
  coffees: Coffee[];
  addCoffee: (coffeeName: string) => void;
  decreaseCoffee: (coffeeName: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextType);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: []
  }, () => ({ coffees: coffeesData }))

  const { coffees } = cartState;

  function addCoffee(coffeeName: string) {
    dispatch(addCoffeeAction(coffeeName))
  }

  function decreaseCoffee(coffeeName: string) {
    dispatch(decreaseCoffeeAction(coffeeName))
  }

  return (
    <CartContext.Provider value={{
      coffees,
      addCoffee,
      decreaseCoffee
    }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
