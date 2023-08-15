# useNavigate

* import useNavigate
        import { useNavigate } from "react-router-dom";

* create instance
  
        const navigate = useNavigate()

* use it, when you want to navigate

        navigate("/cheque/request");


## navigate url after Redux Toolkit dispatch action complete

* creat async await, 
* so it will wait until dispatch action finish
* then navigate to another url

```jsx title='navigate url after Redux Toolkit dispatch action complete'
  const callDispatch = async () => {
      const data = await dispatch(slice_userLogin(resultData.data));
      navigate("/cheque/request");
    };

    callDispatch();
```