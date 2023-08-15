# useEffect

## syntax

```jsx title='useEffect'
    useEffect(() => {
        //Code will be executed at initial render

        //optional return function
        return(()=>{
        
    },[dependency array value1, value2])};
```
## Render only once
* if the dependency array is empty, `useEffect` will run only once at initial render.
  
```jsx title='useEffect render one time'
    useEffect(() => {
        //Code will be executed at initial render

        //optional return function
        return(()=>{
        
    },[])};
```

## Render based on dependency
* If we provide dependency, then useEffect will render whenever the dependency value is updated
* It will still run initially once when component is mounted, and then for every dependency value is updated

```jsx title='useEffect render one time'
    useEffect(() => {
        //Code will be executed at initial render

        //optional return function
        return(()=>{
        
    },[count])};
```

## Rendering Sequence

* useEffect rendering sequence are not sequence, it is running <span class='highlight'>asynchronous</span>
* the component will render first without rendering useEffect, after it finish the rendering, then `useEffect` will be called
* look at the below code how it's executed


```jsx title='useEffect rendering'
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  console.log("Dashboard initiated");

  const [count, setCount] = useState(0);

  console.log("before useEffect count =", count);
  useEffect(() => {
    console.log("Inside useEffect count", count);

    //optional return function
    return(()=>{
        console.log('useEffect will clearTimeout | unSubscribe | unmount component')
    })
  },[]);
  console.log("after useEffect count =", count);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decreament
      </button>

      <div>{count}</div>
    </>
  );
};

export default Dashboard;
```

```jsx title='output'
Dashboard initiated
before useEffect count = 0
after useEffect count = 0
Inside useEffect count 0
```

## return in useEffect
* `return` is optional in useEffect
* the return code will not be executed at initial render
  
