import React, { useState } from 'react';

import Loading from './components/Loading';
import Portfolio from './Portfolio';
import ReloadOnResize from './utils/ReloadOnResize';

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
