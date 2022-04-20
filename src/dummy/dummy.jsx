import React, { useState } from 'react';
import{useSelector,useDispatch} from "react-redux";
import {increment,decrement, selectCount} from "../slices/counter-slice"

export default function Dummy(){
    const count = useSelector(selectCount)
    const dispatch= useDispatch()
    const [incrementAmount, setIncrementAmount] = useState("0");


    return (
        <div>
            <div>
                <h1>Counter</h1>
            </div>
            <div>
                <p>{count}</p>
                <button onClick={()=> dispatch(increment())}>+</button>
                <button >-</button>
            </div>


        </div>

    )
}
