import { createContext , useContext  , useReducer , ReactNode } from "react";

const defaultState = { count: 0 }

const CounterContext = createContext<{state: State , dispatch: Dispatch} | undefined>(undefined)

export type Action = 'increment' | 'decrement'
export type State = typeof defaultState
export type Dispatch = (action: Action) => void

const counterReducer = (state: State , action: Action) => {
    switch(action){
        case 'increment':
            return { 
                count: state.count + 1 
        }
        case 'decrement':
            return {
                count: state.count - 1
            }
        default:
            return state    
    }
}

export function CounterProvider({ children } : { children: ReactNode  } ){
    const [ state , dispatch ] = useReducer(counterReducer , defaultState)

    return <CounterContext.Provider value={{state , dispatch }} >{children}</CounterContext.Provider>
}

export function useCounter(){
    const context = useContext(CounterContext)

    if(!context) throw new Error('Wassup bro))')

    return context
}