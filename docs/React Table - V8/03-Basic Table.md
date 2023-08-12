# Basic Table 

*- (React Table v8)*

## Create Table Instance

* Before create table, define column(`tb_column`) and fetch data (`tb_data`), pass those objects into `useReactTable` to create table instance
* then create table instance

```jsx title='table instance'
const table_Instance = useReactTable({
  columns: tb_columns,                //tb_columns - all header columns
  data: tb_data,                      //tb_data - all records
  getCoreRowModel: getCoreRowModel(), //this will get row data
});
```

## Create Header 

* to display the header use `table_Instance.getHeaderGroups()` method
* this is holding all the information about headers
* try to print in the console log of `table_Instance.getHeaderGroups()`

```jsx title="table_Instance.getHeaderGroups()"
console.log(table_Instance.getHeaderGroups())
```
*output*

![table_Instance.getHeaderGroups()](img/getHeaderGroups().jpg)

* using `map` you can make `<thead><tr><td>` for every header like below code

```jsx title="<thead> getHeaderGroup()"
<thead>
  {getHeaderGroups().map((headerGroup) => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <th key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
        </th>
      ))}
    </tr>
  ))}
</thead>
```

## Create Body

* to display the body use `table_Instance.getRowModel()` method
* let's see in console log, what `getRowModel()` is holding
  
```jsx title="table_Instance.getRowModel()"
console.log(table_Instance.getRowModel())
```
*output*

![getRowModel()](img/getRowModel().jpg)

* `getRowModel()` holds 3 array object
    1. flatRows
    2. rows
    3. rowsById

* to print the rows in body section of table, we will use rows array object and pass into map to return each rows

```jsx title="table body using getRowModel().rows"
<tbody>
  {getRowModel().rows.map((row) => (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  ))}
</tbody>
```

## Basic Table

* After we define column header, records, and put together `<thead><tbody>` what we saw above, this the final code

```jsx Title='Basic Table'

import React, { useState, useEffect, useMemo } from "react";
import { qryGetUnApprovedRequest } from "./query_ChqRequest";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { TB_REQ_COLUMNS } from "./tb_column";
import { Box, Card, Container, Grid } from "@mui/material";

const Table_AllUnApproveReq = () => {
  const [requestAll, setRequestAll] = useState([]);
  const [queryEnabled, setQueryEnabled] = useState(true);

  const {
    data,
    isLoading,
    isInitialLoading,
    isFetching,
    isSuccess,
    fetchStatus,
    isError,
    error,
  } = qryGetUnApprovedRequest(queryEnabled, setQueryEnabled); //fetch data from Api

  if (isSuccess) {
    console.log("isSuccess condition = True");
    setQueryEnabled(false);
    setRequestAll(data.data);
  }

  const tb_columns = useMemo(() => TB_REQ_COLUMNS, []);
  const tb_data = useMemo(() => requestAll, [requestAll]); //FETCH Data and Store it in useMemo
  const tblInstance = useReactTable({
    columns: tb_columns,
    data: tb_data,
    getCoreRowModel: getCoreRowModel(), //this will get row data
  });

  //destructure table instance
  const { getHeaderGroups, getRowModel } = tblInstance;
  console.log("table => getHeaderGroups() =" + tblInstance.getHeaderGroups());
  console.log(tblInstance.getHeaderGroups()); // this will hold all header information
  console.log(tblInstance.getRowModel());     // this will hold all data record information
  return (
    <>
      <Card elevation={1} sx={{padding:2}}>
        <table>
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Table_AllUnApproveReq;

```

* add some css for the table