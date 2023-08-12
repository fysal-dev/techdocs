# Sorting

* import `getSortedRowModel` 

        import { getSortedRowModel } from "@tanstack/react-table";
    
* create `useState` for sorting

        const [tbSorting, setTbSorting] = useState([])

* There are 3 things to add in table instance
    1. add the `getSortedRowModel` method, 
    2. add `tbSorting` useState, this will hold sorting records
    3. add `onSortingChange: setTbSorting`to set Sorting either Ascending or Descending

```jsx title='Table Instance'
  const tblInstance = useReactTable({
    columns: tb_columns,
    data: tb_data,
    getCoreRowModel: getCoreRowModel(), 

    getSortedRowModel : getSortedRowModel(), //Sorting
    state:{
      sorting: tbSorting,                   //sorting records
    },
    onSortingChange: setTbSorting,          //setSorting onchange
  });
```

* add `onClick` handler on `<thead> <tr> <th onclick>`, see the code below

```jsx title='onClick'
<th 
    key={header.id}
    onClick={header.column.getToggleSortingHandler()}
>
``` 
* add **MaterialIcon** based on ascending or descending, 
  
```jsx title='Add Icons for ascending and descending'
<th 
    key={header.id}
    onClick={header.column.getToggleSortingHandler()}
    >
    {header.isPlaceholder
        ? null
        : flexRender(
            header.column.columnDef.header,
            header.getContext()
        )}
        {{asc:' -up',desc:' -down'}[header.column.getIsSorted()?? null]}  //ascending or descending icons
</th>
```

this will be the full code for Sorting

```jsx title='Table Soring'
import React, { useState, useEffect, useMemo } from "react";
import { qryGetUnApprovedRequest } from "./query_ChqRequest";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel     //sorting
} from "@tanstack/react-table";
import { TB_REQ_COLUMNS } from "./tb_column";
import { Box, Card, Container, Grid } from "@mui/material";

const Table_AllUnApproveReq = () => {
  const [requestAll, setRequestAll] = useState([]);
  const [queryEnabled, setQueryEnabled] = useState(true);

  const [tbSorting, setTbSorting] = useState([])        //sorting

    //fetch data
  const {
    data,
    isLoading,
    isInitialLoading,
    isFetching,
    isSuccess,
    fetchStatus,
    isError,
    error,
  } = qryGetUnApprovedRequest(queryEnabled, setQueryEnabled);


  const tb_columns = useMemo(() => TB_REQ_COLUMNS, []);
  const tb_data = useMemo(() => requestAll, [requestAll]);

  const tblInstance = useReactTable({
    columns: tb_columns,
    data: tb_data,
    getCoreRowModel: getCoreRowModel(), //this will get row data
    getSortedRowModel : getSortedRowModel(), //sorting
    state:{
      sorting: tbSorting,
    },
    onSortingChange: setTbSorting,
  });

  //destructure table instance
  const { getHeaderGroups, getRowModel } = tblInstance;

  return (
    <>
    
      <Card elevation={1} sx={{padding:2}}>
        <table>
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th 
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()} //onClick sorting
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {/* Add Icon for Sorting */}
                        {{asc:' -up',desc:' -down'}[header.column.getIsSorted()?? null]}  

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