# Global Filtering

* import `getFilteredRowModel`

```jsx title='import'
import { getFilteredRowModel } from "@tanstack/react-table";
```

* create useState variable
          
          const [tbGlobalFilter, setTbGlobalFilter] = useState([])

* add `getFilteredRowModel`, useState variable `tbGlobalFilter` and set function `setTbGlobalFilter` to table instance
  
```jsx title='table instance'
const tblInstance = useReactTable({
    columns: tb_columns,
    data: tb_data,
    getCoreRowModel: getCoreRowModel(), //this will get row data
    getSortedRowModel: getSortedRowModel(), //sorting
    getFilteredRowModel: getFilteredRowModel(), //filter
    state: {
      sorting: tbSorting,
      globalFilter: tbGlobalFilter, //add useState Global filter
    },
    onSortingChange: setTbSorting, //setSorting
    onGlobalFilterChange: setTbGlobalFilter, //setGlobalFilter
  });
```

* add input field, set value by using onChange handler
  
```jsx title='Input field with onChange'
<TextField
    variant="filled"
    label="Global Filter"
    value={tbGlobalFilter}
    onChange={(e) => setTbGlobalFilter(e.target.value)}   //this will setState
    sx={{width:'70%'}}
/>
```
  
so, the final code will be

```jsx title=Global Filter
import React, { useState, useEffect, useMemo } from "react";
import { qryGetUnApprovedRequest } from "./query_ChqRequest";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { TB_REQ_COLUMNS } from "./tb_column";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";

const Table_AllUnApproveReq = () => {
  const [requestAll, setRequestAll] = useState([]);
  const [queryEnabled, setQueryEnabled] = useState(true);

  const [tbSorting, setTbSorting] = useState([]);
  const [tbGlobalFilter, setTbGlobalFilter] = useState("");

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

  //table instance
  const tblInstance = useReactTable({
    columns: tb_columns,
    data: tb_data,
    getCoreRowModel: getCoreRowModel(), //this will get row data
    getSortedRowModel: getSortedRowModel(), //sorting
    getFilteredRowModel: getFilteredRowModel(), //filter
    state: {
      sorting: tbSorting,
      globalFilter: tbGlobalFilter, //add useState Global filter
    },
    onSortingChange: setTbSorting, //setSorting
    onGlobalFilterChange: setTbGlobalFilter, //setGlobalFilter
  });

  //destructure table instance
  const { getHeaderGroups, getRowModel } = tblInstance;
  console.log("table => getHeaderGroups() =" + tblInstance.getHeaderGroups());
  return (
    <>

      <Card elevation={1} sx={{ padding: 2 }}>
        <TextField
          variant="filled"
          label="Global Filter"
          value={tbGlobalFilter}
          onChange={(e) => setTbGlobalFilter(e.target.value)}   //global filter
          sx={{width:'70%'}}
        />
        <table style={{border:'1px solid #dddddd', marginTop:'5px'}}>
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} style={{ height: "20px" }}>
                {headerGroup.headers.map((header) => (
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
                    {/* Add Icon for Sorting */}
                    {
                      {
                        asc: (
                          <IconButton
                            sx={{ padding: "0px" }}
                            aria-label="ascending"
                            size="small"
                          >
                            <ArrowDropUpIcon fontSize="small" />
                          </IconButton>
                        ),
                        desc: (
                          <IconButton
                            sx={{ padding: "0px" }}
                            aria-label="descending"
                            size="small"
                          >
                            <ArrowDropDownIcon fontSize="small" />
                          </IconButton>
                        ),
                      }[header.column.getIsSorted() ?? null]
                    }
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
