# Redux Toolkit setup

### Install Redux Toolkit and React-Redux

```jsx title='install redux toolkit'
npm install @reduxjs/toolkit react-redux
```

### Create a Redux Store

* Create folder structure `src/utils/ReduxStore.js`
* Import `configureStore` and create a store like below

```jsx title='src/utils/ReduxStore.js'
import { configureStore } from '@reduxjs/toolkit'

const ReduxStore = configureStore({
  reducer: {},
})

export default ReduxStore
```

### Provide the Redux Store to React

```jsx title='App.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reduxStore from './utils/ReduxStore'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Create a Redux State Slice

* Create a folder structure `src\utils\reduxSlices\AuthSlice.js`
* import `createSlice`
     
      import { createSlice } from '@reduxjs/toolkit'
* define initial value that will hold as a initial value

```
const initialState = {
  userName: '',
  userId:''
}
```

* define reducer function, which will have initial value and action method

```jsx title ='slice_auth' 
import { createSlice } from "@reduxjs/toolkit";

const initialValue={
    userName : '',
    userID : ''
}

export const slice_auth = createSlice({
    name:'sliceAuth',
    initialValue,
    reducers:{
        loginUser : (state,action) => {
            //state - initial value
            //action - arguments/data

            //logic
        },

        logoutUser : (state) => {
            //logic
        }
    }
});

export const {loginUser,logoutUser} = slice_auth.actions  // ".actions" keyword must
export default slice_auth.reducer; //".reducers" keyword must
```
