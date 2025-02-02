# react-angrid-ts [Demo](https://react-angrid-ts.vercel.app/)

![react-angrid-ts](/example/public/2.png 'react angrid ts').

## Installation

`npm install react-angrid-ts`

## Features

-   custom css
-   localization
-   rtl support
-   dark theme
-   pagination
-   sortable

## Usage Example

```
import {Angrid} from "rect-angrid-ts";

const columns = [
    {
        field: 'userId',
        headerName: 'User Id',
        description: 'user id that is unique',
        width: 30,
        sortable: true,
    },
    {
        field: 'fullName',
        headerName: 'Fullname',
        description: 'full name of user',
        width: 100,
        sortable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        description: 'age of user',
        width: 50,
        sortable: true,
    },
    {
        field: 'delete',
        headerName: 'delete(component cell)',
        description: 'delete user',
        width: 50,
        render: (row: any) => {
            return <button onClick={() => console.log(row)}>delete</button>
        },
    },
]

<div className='App' dir='rtl'>
            <Angrid
                rtl
                showRowNumber
                columns={columns}
                rows={createUsers()}

                onPageChange={(page, size) => console.log(page, size)}
                pageSize={10}
                showCurrentPage
                showNumberOfPage
                showTotalRecord
                rowHeight={30}
            />
        </div>
```

## Props

| Parameter         | Default | Require | Type       |
| ----------------- | ------- | ------- | ---------- |
| className         | -       | false   | string     |
| theme             | light   | false   | dark/light |
| rowHeight         | 30      | false   | number     |
| columnNumberTitle | #       | false   | string     |
| showRowNumber     | true    | true    | boolean    |
| columns           | []      | true    | object[]   |
| rows              | []      | true    | array      |
| pageSize          | 20      | false   | number     |
| loading           | false   | false   | boolean    |
| totalCount        | -       | false   | number     |
| showTotalRecord   | false   | false   | boolean    |
| showCurrentPage   | false   | false   | boolean    |
| showNumberOfPage  | false   | false   | boolean    |
| showPageRange     | true    | false   | boolean    |
| showPageSelect    | true    | false   | boolean    |
| showPageNumber    | true    | false   | boolean    |
| showPageArrow     | true    | false   | boolean    |
| bordered          | false   | false   | boolean    |
| textCurrent       | string  | false   | string     |
| textTotal         | string  | false   | string     |
| textNumber        | string  | false   | string     |
| textEmpty         | string  | false   | string     |
| textPage          | string  | false   | string     |
| rtl               | false   | false   | boolean    |
| internalPaginate  | true    | false   | boolean    |
| onPageChange      | -       | true    | function   |

### Pull Request

-   unit test
-   customize theme
-   customize dark mode
-   add filter
-   create Document
-   Responsive
