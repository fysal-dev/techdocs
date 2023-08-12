# React Table Setup 

*- (React Table v8)*

1. <span class='highlight'>Get the data</span> you want to display
2. <span class='highlight'>Define the columns</span> for your table
3. Use the data and columns defined to create a table instance using `react-table`
    * import `import { useReactTable } from "@tanstack/react-table"`
4. Define a basic table structure using plain HTML
5. Use the table instance created in Step 3 to bring life to the HTML defined in STEP 4 
6. Include the desired CSS


## 1. Get the Data
    * using react query fetch the data and store it useState

## 2. Define the COLUMNS
```jsx title='Columns Def'
export const TB_REQ_COLUMNS = [
    {
        Header: 'Request No',   //define header name
        accessorKey:'request_no', //it should be the same as *FETCH_DATA Key names*
    },
    {
        Header: 'Description',
        accessorKey:'description',
    },
    {
        Header: 'Craated By',
        accessorKey:'created_by',
    },
    {
        Header: 'Date Created',
        accessorKey:'date_created',
    },
    {
        Header: 'Region',
        accessorKey:'request_no',
    },
]
```



## 3. Create table instance and define COLUMNS and DATA

* import `useReactTable`, `columns`,`data`(data always from react query)

```jsx title='Table instance'

import { useReactTable } from "@tanstack/react-table";
import { TB_REQ_COLUMNS } from "./tb_column";

const Table_request = () => {
    
    const [requestAll, setRequestAll] = useState([]);
    /**
     * fetch data and store in useState variable
     * */
    // const tb_columns = useMemo(() => TB_REQ_COLUMNS, []); 
    // const tb_data = useMemo(() => requestAll, []);
    const tblInstance = useReactTable({
      columns: TB_REQ_COLUMNS,
      data: requestAll,
    });

    return(
        <>
        </>
    )
}
```