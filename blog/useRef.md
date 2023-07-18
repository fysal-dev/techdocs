---
slug: useRef post
title: useRef
authors: faisal
tags: [react js, useRef]
---

# useRef

* useRef will store the **element, not value**, for storing value, we should use `useState`
* using useRef, you can access the object which contains `.current`
* `useRef` will never show the modified value at re-render

## Returns

    `useRef` returns an object called `current`

## When to use useRef?
* When you want to take the value and manipulate the value, But you don't want to re-render, then use the useRef
* for eg; useRef will be highly usefull when you submit a form, when you don't need to validate at realtime

:::danger

* Don't read or write using useRef while re-rendering the component

:::

```jsx title="using useRef hook"
import { useRef } from "react";

export default function SignIn() {
 
    const inputUserID = useRef('');     //initialise
    const inputPassword = useRef('');   //initialise

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(inputUserID.current);   //<input type="text" name="userID" value="">
        console.log(inputPassword.current); //<input type="text" name="userPassword" value="">

        console.log("InputUserID = " + inputUserID.current.value);      //InputUserID = fysal@gmail.com
        console.log("inputPassword = " + inputPassword.current.value);  //inputPassword = passwordtext
    };

  return(
    <>
        <input ref={inputUserID} type="text" name="userID"  defaultValue=""/>
        <input ref={inputPassword} type="text" name="userPassword" defaultValue="" />
           
        <button type="submit" onClick={handleSubmit}>Click Me</button>
    </>
  )
}
```

```js title="console log output"
    <input type="text" name="userID" value="">
    <input type="text" name="userPassword" value="">
    InputUserID = fysal@gmail.com
    inputPassword = passwordtext
```

## Using useState hook

* To change the state value, first we should import `useState` and initialise the value
  
      const [userId, setUserId] = useState("");
      const [password, setPassword] = useState("");  

* To set the state value, we have to use `onChange` for input text
    
      <input type="text" name="userID" onChange={(e)=>setUserId(e.target.value)} />
      <input type="text" name="userPassword" onChange={(e)=>setUserId(e.target.value)} />

* Each time, when user enter the text, `onChange` will be triggerred, and set the value and complete component will be re-rendered. 
* if user enter `fysal@gmail.com`, totel charecter is 15, component will re-render 15 times
* same thing for password text field will follow

```jsx title="using useState hooks"
import { useState } from "react";

export default function SignIn() {

    console.log("Sign in Initiated");

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    console.log('userId ='+userId)
    console.log('password ='+password)

    const handleSubmit = (event) => {
        event.preventDefault();
    };
  return(
    <>
        <input type="text" name="userID" onChange={(e)=>{
                console.log('set userId value')
                setUserId(e.target.value)
              }} />
        <input type="text" name="userPassword" onChange={(e)=>{
                console.log('set password value')
                setUserId(e.target.value)
              }} />
           
        <button type="submit" onClick={handleSubmit}>Click Me</button>
    </>
  )
}
```

* when I just enter the text only first 3 letters `fys`
* here is the following output on console log
  
```js title="console log output"
set userId value
Sign in Initiated
userId =f
password =

set userId value
Sign in Initiated
userId =fy
password =

set userId value
Sign in Initiated
userId =fys
password =
```