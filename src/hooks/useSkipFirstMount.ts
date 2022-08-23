import { useEffect, useRef } from "react";

export const useSkipFirstMount = (
  callback: () => void,
  arrayOfDependecies: any[] = []
) => {
  const firstMountRef = useRef<boolean>(true);

  useEffect(() => {
    if (!firstMountRef.current) {
      callback();
    }

    firstMountRef.current = false;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, arrayOfDependecies);
};
