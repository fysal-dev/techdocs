# useMemo Hook

* `useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.
* `useMemo` have 2 parameters <span class='highlight'>useMemo(calculateValue, dependencies)</span>
* `useMemo` initiallly renders, it will calculatevalue, based on dependencies and store it as a cache
* Next time when component rerender because of any other state value changes, useMemo will not rerender if useMemo dependencies did not change
* `useMemo` will only rerender when it own dependencies value changes. other wise it will not rerender


### When to use useMemo?

let's say you have 2 useState variable `counter1` and `counter2`, whenever `counter1` state value is changed, then the entire component will rerender, including `counter2`, 

in the same way, when `counter2` state variable changes, then it will rerender entire component, including `counter1`

consider the situation, the `counter1` is having calculation process, which will take 2-3 seconds to finish the calculation, So <span class='highlight'>each time when any counter state variable changes, this will take 2-3 seconds</span>

even only `counter2` state value change, this will take 2-3 seconds, because once `counter2` change state, the component will re-render, if the component re-render, this will also calculate `counter1`, that's why **useMemo** come into picture

so, If you use useMemo for `counter1` which takes a huge calculation process, it will initially render and it takes 2-3 seconds delay to complete the calculation,

But when `counter2` state changes, the complete component will rerender, but useMemo will never be rerender, until it dependencies never change