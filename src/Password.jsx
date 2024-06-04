// function 
//  password length
//  char
// password

// options
// number alllow
// special char allow

import React, { useEffect, useState } from 'react'
import "./App.css"

function Password() {

    const [passLength, setPassLength] = useState(6)
    const [password, setPassword] = useState('')
    const [charAllow, setCharAllow] = useState(false)
    const [numberAllow, setNumberAllow] = useState(false)

function PassGen(){

    let pass = ''
    let str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

    if(numberAllow){
        str += 1234567890
    }

    if(charAllow){
     str += '!@#$%^&*()'
    }


    for(let i=1;i<=passLength;i++){
        let random = Math.floor(Math.random() * str.length)
        pass += str[random]
         
    }
setPassword(pass)

}

useEffect(()=>{
    PassGen();
},[numberAllow,charAllow])

  return (
    <div className='pas'>
        <input type="text" value={password} />
        <input type="checkbox" name="number" id="num" onChange={()=>{setNumberAllow(!numberAllow)}}/> Number
        <br/>
        <input type="checkbox" name="character" id="char" onChange={()=>{setCharAllow(!charAllow)}}/> Character
        <br/>
        <button onClick={PassGen}>clock</button>
      
    </div>
  )
}

export default Password
