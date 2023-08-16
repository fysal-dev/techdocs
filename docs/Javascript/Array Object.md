# Array Object

## Sample

```jsx title='Array obj'
const arr = [
                {
                    EntryID: 1,
                    ProductNumber: '1001Cpin002',
                    ProdType: 1,
                    ProductName: 'Kain Pasang Pink',
                    ExtendedDescription: 'Kain Pasang Pink',
                    Meter: 4,
                    Quantity: 3,
                    ExtPrice: 126,
                    ExtFullPrice: 135,
                    AmountSave: 9,
                    DiscountPercent: 6,
                    ImageName: 'DSC02113'
                }, {
                    EntryID: 2,
                    ProductNumber: '1001Cgre001',
                    ProdType: 1,
                    ProductName: 'Kain Pasang Green',
                    ExtendedDescription: 'Kain Pasang Green',
                    Meter: 4,
                    Quantity: 2,
                    ExtPrice: 82,
                    ExtFullPrice: 90,
                    AmountSave: 8,
                    DiscountPercent: 6,
                    ImageName: 'DSC02088'
                },
  
]
```

### How to replace array value in ES6 ?

**syntax**

        `array.splice(index, howmany, item1, ....., itemX)`

```jsx title='Replace Array'
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### How to replace array object with another array object ?

```jsx title='replace Array object'
const arr1 = [
    {
        EntryID: 1,
        ProductNumber: '1001Cpin002',
        ProdType: 1,
        ProductName: 'Kain Pasang Pink'
    },
    {
        EntryID: 2,
        ProductNumber: '1001Cpin002',
        ProdType: 1,
        ProductName: 'Kain Pasang Pink'
    }

]

const arr2 = [
    {
        EntryID: 3,
        ProductNumber: '1001Cpin002',
        ProdType: 1,
        ProductName: 'Kain Pasang Pink'
    },
    {
        EntryID: 44,
        ProductNumber: '1001Cpin002',
        ProdType: 1,
        ProductName: 'Kain Pasang Pink'
    }

]

arr1.splice(0, arr1.length, ...arr2)  

// 0 => starting index
// arr1.length => how many elements from **starting index** to be removed
// ...arr2 => going to replace as new value

```

