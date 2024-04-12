import React, { useState } from 'react';


import ReloadOnResize from './utils/reload-on-resize';
import Loading from './components/loading.js';
import Portfolio from './portfolio.js';

const App = () => {
  const [loading, setLoading] = useState(true);

  const stopLoading = () => {
    setLoading(false);
    //test
  };

  return (
    <>
      <ReloadOnResize />
      {loading ? (
        <Loading stopLoading={stopLoading} />
      ) : (
        <div>
          <Portfolio />
        </div>

      )}
    </>
  );
};

export default App;
