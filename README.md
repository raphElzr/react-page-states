# react-page-states

> React hook for bundling typical states used in table pagination

[![NPM](https://img.shields.io/npm/v/react-page-states.svg)](https://www.npmjs.com/package/react-page-states) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-page-states
or
yarn add react-page-states
```

## Features

* pageNo and pageSize saved in url search params to handle page refresh

## Usage

Import the library and use the hook:
```tsx
import * as React from 'react'
import { usePage } from 'react-page-states'

const Example = () => {
  const { pageNo, pageSize, total, setPageNo, setPageSize } = usePage();
}
```
## API
| Property | Type | Default | Description
| ------------- |---------------------- | ----|----------------------------------------------------------------------- | 
| `pageNo`      | `number`              | `1` | Page number.                                                           |
| `pageSize`    | `number`              | `10`| Page size.                                                             |
| `total`       | `number`              | `0` | Used for computing max allowable pages.                                |
| `maxPage`     | `number`              | `0` | Auto computed based on page size and total items.                      |
| `setPageNo`   | `() => void`          |     | Sets page number value                                                 |    
| `setPageSize` | `() => void`          |     | Sets page size value                                                   |       
| `setTotal`    | `() => void`          |     | Sets total value                                                       |                  

## License

MIT © [raphElzr](https://github.com/raphElzr)

---
