import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Portfolio from './Portfolio';

const App = () => {
  const [loading, setLoading] = useState(true);

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <>
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
