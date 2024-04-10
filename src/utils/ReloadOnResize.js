import React, { useEffect } from 'react';

function ReloadOnResize() {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return;
}

export default ReloadOnResize;
