import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Portfolio from './Portfolio';

const App = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); 

  //   return () => clearTimeout(timeout);
  // }, []);

  const stopLoading = () => {
    console.log('stopped');
    setLoading(false);
  };

  return (
    <>
      {loading ? (
            <Loading stopLoading={stopLoading} />    
      ) : (
        <Portfolio />
      )}
    </>
  );
};

export default App;
