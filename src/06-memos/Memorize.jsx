import React, { useState } from 'react'
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const [show, setShow] = useState(false);
    const {counter, increment} = useCounter(10);
  return (
    <>
        <h1>Counter: <Small value={counter}/> </h1>

        <button  
            className='btn btn-primary'
            onClick={() => increment()}>
                +1
        </button>

        <button
            className='btn btn-outline-primary ms-2'
            onClick={()=> setShow(!show)}>
                Show / Hide
        </button>
    </>
  )
}
