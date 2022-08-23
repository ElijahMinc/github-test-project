import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { FiltersData } from "../types/filters.interface";

interface AppContextData {
  filters: FiltersData;
  handleFilterChange: (
    key: keyof FiltersData,
    value: FiltersData[keyof FiltersData]
  ) => void;
}

const AppProvider = createContext<AppContextData>({} as AppContextData);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = ({ children }: AppProviderProps) => {
  const [filters, setFilters] = useState<FiltersData>({
    searchRepoValue: "",
    searchUsersValue: "",
    perPage: 10,
  });

  const handleFilterChange = useCallback(
    (key: keyof FiltersData, value: FiltersData[keyof FiltersData]) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filters]
  );

  const values = useMemo(
    () => ({
      filters,
      handleFilterChange,
    }),
    [filters, handleFilterChange]
  );

  return <AppProvider.Provider value={values}>{children}</AppProvider.Provider>;
};

export const useAppContext = () => useContext(AppProvider);
