# Column Def

*- (React Table v8)*

We can create column definition in many ways

### Column Definition way 1
```jsx title='columns def'
export const TB_REQ_COLUMNS = [
    {
        Header: 'Request No',   //define header name
        accessorKey:'request_no', //it should be the same as *FETCH_DATA Key names*
    },
    {
        Header: 'Description',
        accessorKey:'description',
    },  
]
```

### Column Definition way 2 - columnHelper

using `columnHelper`

```jsx title='using columnHelper'
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const TB_REQ_COLUMNS = [
  columnHelper.accessor("request_no", {
    header: () => <span>Request No</span>,
    cell: (info) => {
        return <a href="#">{info.getValue()}</a>
    },
  }),
  columnHelper.accessor("description", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Description</span>,
  }),
  columnHelper.accessor("created_by",{
    cell:info => info.getValue(),
    header:()=> <span>Created By</span>
  })
];

```