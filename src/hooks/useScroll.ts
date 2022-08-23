import { MutableRefObject, useEffect, useRef } from "react";
type DOMNodes = {
  parentRef?: MutableRefObject<HTMLDivElement | null>;
  childRef: MutableRefObject<HTMLDivElement | null>;
};

type useScrollType = (
  domNodes: DOMNodes,
  callback: (observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit
) => IntersectionObserver | undefined;

export const useScroll: useScrollType = (
  domNodes,
  callback,
  options?: IntersectionObserverInit
) => {
  const observer = useRef<IntersectionObserver | undefined>(undefined);

  useEffect(() => {
    const childrenElement = domNodes.childRef?.current || null;

    if (!childrenElement) return;

    const rootOptions = {
      ...options,
    };
    observer.current = new IntersectionObserver(([target], observer) => {
      if (target.isIntersecting) {
        callback(observer);
      }
    }, rootOptions);

    observer.current.observe(childrenElement!);

    return () => {
      if (!!observer.current) {
        observer.current.unobserve(childrenElement!);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);

  return observer.current;
};
