
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

 const {counter, increment,decrement,reset} = useCounter();


  return (

    <>

     <div>Counter With Hook: {counter}</div>
     <hr />
     
     <button className="btn btn-danger" onClick={()=>increment()} >+1</button>
     <button className="btn btn-primary" onClick={reset}>Reset</button>
     <button className="btn btn-dark" onClick={()=>decrement()}>-1</button>

    </>

    
    
  )
}
