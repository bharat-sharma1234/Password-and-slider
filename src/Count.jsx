import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function Count() {
    const [count, setValue] = useState(1)

    const arr = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/10543821/pexels-photo-10543821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/7449050/pexels-photo-7449050.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]

    // const inc=()=>{

    //     if(count<5){
    //     setValue(count+1)
    //     }
    //     else {
    //         setValue(0)
    //     }

    // }
    // const dec=()=>{
    //     if(count>0){
    //     setValue(count-1)
    //     }
    //     else{
    //         setValue(5)
    //     }
    // }

    // const set=()=>{

    //     if(count==arr.length-1){
    //     setValue(0)
    //     }
    //     else {
    //         setValue(count+1)
    //     }

    // }
    const dec = () => {
        if (count == 0) {
            setValue(arr.length - 1)
        }
        else {
            setValue(count - 1)
        }
    }
    const inc = () => {
        if (count === arr.length - 1) {
            setValue(0)
        }
        else {
            setValue(count + 1)
        }
    }

    // function slide(){
    // const inter = setInterval(() => {
    //     inc();
    // }, 2000)

    // return () => clearInterval(inter);
    // }

    useEffect(()=>{
        const inter = setInterval(() => {
            inc();
        }, 2000)
    
        return () => clearInterval(inter);
    })
   

    return (
        <>
            <button>Increment</button>
            <img className='slideimg' src={arr[count].image} alt="" />
            <button onClick={dec}>Decrement</button>
        </>
    )
}

export default Count
