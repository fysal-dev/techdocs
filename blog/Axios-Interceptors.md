---
slug: axios interceptor post
title: axios interceptor
authors: faisal
tags: [react js, axios, axios interceptor]
---

# Axios Interceptors

### What is Axios Interceptors?

Whenever client make request to Backend, the <span class='highlight'> axios interceptors </span> will send an information(eg: token) before the request made .

With the help of axios interceptor information, we can do some action in the backend based on our requirement

**For example:** If we are using **JWT Token** methodology in our applicaiton for user authentication, so whenever client made any request, the axios interceptor will send Token, along with other header information, we can validate the user is exists or not

### Why we need to use?

Normally If we wants to send a `axios.post` request, we have to add a following paramenters

* url (base_url + page_url)
* parameters
* headers(which contains)
    * Authorization
    * Content-Type
    * Custom-headers
  
the below code is sample for post request.

```jsx title='axios post request(without Interceptor)'
const {data} = await axios
    .post('https://httpbin.org/newpost', 
    {
        firstName: 'Fred',
        lastName: 'Flintstone',
        orders: [1, 2, 3]
    }, 
    {
        headers: {
        'Authorization': 'Bearer my-token'
        'Content-Type': 'application/json',
        }
    })
```

Just imagine, suppose if our application has more than 100 request, all the request has a common base_url = `"https://httpbin.org"`, content-type = `"application/json"` and everytime attach `"Token"` along with header. these are all same code which is repeating in every request that we make.

suppose in future, if we wants to change our base_url from `"https://httpbin.org"` to `"https://httpbin.en"`, then we need to change in every place of request.

To solve this issue, we can make a basic setup at one time as axios interceptor. Then wehenever we need to make request, this axios interceptor instance will hold the information, it will send it to backend before make request.

 See the following code

```jsx title='Axios-Interceptor'
import axios from "axios";

const token = localStorage.getItem('Token');
const _AUTHORIZATION_TOKEN = (token)? `Bearer ${token}` : '';

const axiosInstance = axios.create({
    baseURL: "https://httpbin.org"
});

axiosInstance.interceptors.request.use((request)=>{
    request.headers.Authorization = _AUTHORIZATION_TOKEN
    request.headers["Content-Type"]="application/json";
    request.headers.myapp = 'my-app'

    return request
}
,(error) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response)=> {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance
```

To make request, just import the `axiosInstance`. pass the url(`"/newPost"`) as parameter but this time without base url(`"https://httpbin.org"`)


```jsx title='Axios request with Interceptor'
import axios from "../AxiosInterceptor";

const {data} = await axios
    .post("/newpost", 
    {
        firstName: 'Fred',
        lastName: 'Flintstone',
        orders: [1, 2, 3]
    })
    .then(function (response) {
      return response;
    });
```

Axios interceptor will take care of binding Base_url + page_url, then it will make request = `"https://httpbin.org/newPost"`,

No more burder to add headers for every request. axios interceptor will take the responsible to attach along with each and every request.

