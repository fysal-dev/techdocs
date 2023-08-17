# Column Edit

## Get specific row

`props.row` - this will hold the <span class='highlight'>entire row all information</span>
`props.row.original` - this will <span class='highlight'>hold the entire row value</span>

```jsx title='Edit Row'
export const TB_REQ_COLUMNS = [
  columnHelper.accessor('action',{
    header:()=><span>Action</span>,
    cell:(props)=> <button onClick={()=>actionEdit(props.row)}>edit</button>
  }),
  columnHelper.accessor("request_no", {
    header: () => <span>Request No</span>,
    cell: (info) => {
        return <a href="#">{info.getValue()}</a>
    },
    size:400,
    minSize:400
  }),
  columnHelper.accessor("region",{
    header:"Region",
    cell:info => info.getValue()
  }),
  columnHelper.accessor("transfer_type",{
    cell: info => { return info.getValue()},
    header:()=> <span>Transfer Type</span>
  })
];

function actionEdit(row){
  console.log('Action EDIT triggered')
  console.log(row.original)
}
```

```jsx title='Output'
Action EDIT triggered
{request_no: '2306', description: 'تحويل من ساب', created_by: 'ahmed', date_created: '2023-08-01T00:00:00', region: '1001      ', …}
```