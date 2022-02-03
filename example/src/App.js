import React from 'react';

import { usePage } from 'react-page-states';

const App = () => {
  const page = usePage();

  return (
    <div>
      <h1>{'Page no: ' + page.pageNo}</h1>
      <button type='button' onClick={() => page.setPageNo(page.pageNo + 1)}>Increment page no</button>
      <h1>{'Page size: ' + page.pageSize}</h1>
      <button type='button' onClick={() => page.setPageSize(page.pageSize + 1)}>Increment page size</button>
    </div>
  )
}
export default App
