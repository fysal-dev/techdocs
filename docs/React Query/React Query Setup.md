# React Query Setup

## Install package

```
$ npm i @tanstack/react-query
# or
$ pnpm add @tanstack/react-query
# or
$ yarn add @tanstack/react-query
```

## Import the package in the root of APP


```
import React from "react";
import { ReactDOM } from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SignIn />
      </QueryClientProvider>
    </>
  );
};

export default App;

```