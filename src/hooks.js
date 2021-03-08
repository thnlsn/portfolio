import React, { useEffect, useState } from 'react';

// Hook to handle intersection observing taking in IntersectionObserver options
const useOnScreen = function (options = { threshhold: 1 }, once = true) {
  // ref will be a direct reference to the dom element it is attached to
  const [ref, setRef] = useState(null); // Will reference a DOM element
  const [visible, setVisible] = useState(false); // visible should be false by default

  // When the component mounts, create an observer with passed in options
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // This is what we call if intersecting
      if (entry.isIntersecting) setVisible(entry.isIntersecting);
      // If false is passed in for once, then it should switch visible to false when leaving intersection, so it can be animated again when intersected
      else once || setVisible(entry.isIntersecting);
    }, options);

    console.log(ref);
    // Refs sometimes wont be referencing a DOM element on screen, which means ref could be null, so only proceed if it isn't falsy
    if (ref) observer.observe(ref); // If it is though, attach observer to it

    // useEffect can optionally return a function that acts as a clean-up function if either of the variables it is watching for changes
    // Unobserve it if it is referencing a DOM element, so as clean-up it will unobserve
    return () => {
      if (ref) observer.unobserve(ref);
    };
    // Watch ref and visible, so
  }, [ref, options]);

  // Return the setRef function and the value of visible
  // Return setRef instead of ref because of cases where we want IntersectionObserver to conditionally render an entire element, where a ref would not exist at first.
  return [setRef, visible];
};

export { useOnScreen };
