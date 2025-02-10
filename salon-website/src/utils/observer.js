function screenObserver(setter, elementRef) {
  const currentElement = elementRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setter(true);
      }
    },
    { threshold: 0.3 }
  );

  if (currentElement) {
    observer.observe(currentElement);
  }

  return () => {
    if (currentElement) {
      observer.unobserve(currentElement);
    }
  };
}

export default screenObserver;