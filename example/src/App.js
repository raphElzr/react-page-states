import React from 'react';

import { usePages } from 'react-page-states';

const App = () => {
  const page = usePages();
  return (
    <div>
      {page.page}
    </div>
  )
}
export default App
