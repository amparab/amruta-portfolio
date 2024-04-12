import { useEffect } from 'react';

function ReloadOnResize() {
  useEffect(() => {
    const handleResize = () => {
        if (window.screen.width > 768) { // For devices other than phones
            window.location.reload();
        }
      
    };

    //test

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return;
}

export default ReloadOnResize;
