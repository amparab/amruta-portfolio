import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Portfolio from './Portfolio';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
            <Loading />    
      ) : (
        <Portfolio />
      )}
    </>
  );
};

export default App;
