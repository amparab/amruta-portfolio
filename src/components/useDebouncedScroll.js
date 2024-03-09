// import { useEffect, useState } from 'react';

// function useDebouncedScroll(delay, smoothness) {
//   const [scrollY, setScrollY] = useState(0);
//   const [targetScrollY, setTargetScrollY] = useState(0);

//   useEffect(() => {
//     let timeoutId;

//     const handleScroll = () => {
//       setTargetScrollY(window.scrollY);
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }

//       timeoutId = setTimeout(() => {
//         setTargetScrollY((prev) => {
//           const diff = prev - window.scrollY;
//           const delta = Math.abs(diff) > smoothness ? diff / smoothness : diff;
//           return window.scrollY + delta;
//         });
//       }, delay);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timeoutId);
//     };
//   }, [delay, smoothness]);

//   useEffect(() => {
//     let requestId;

//     const updateScrollY = () => {
//       setScrollY((prev) => {
//         const diff = targetScrollY - prev;
//         const delta = Math.abs(diff) > smoothness ? diff / smoothness : diff;
//         return prev + delta;
//       });

//       if (Math.abs(scrollY - targetScrollY) > 1) {
//         requestId = requestAnimationFrame(updateScrollY);
//       } else {
//         setScrollY(targetScrollY);
//       }
//     };

//     requestId = requestAnimationFrame(updateScrollY);

//     return () => {
//       cancelAnimationFrame(requestId);
//     };
//   }, [targetScrollY, smoothness]);

//   return scrollY;
// }

// export default useDebouncedScroll;
