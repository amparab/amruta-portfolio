import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Portfolio from './Portfolio';

const App = () => {
  const [loading, setLoading] = useState(true);

  const stopLoading = () => {
    console.log('stopped');
    setLoading(false);
  };

  const handleClick = () => {
    console.log('Button clicked!');
    // You can add your logic here
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
