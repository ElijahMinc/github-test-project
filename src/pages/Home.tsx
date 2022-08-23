import React from "react";
import { Filters } from "../components/Common/Filters/Filters";
import { FetchUsers } from "../components/Users/FetchUsers";
import { UserList } from "../components/Users/UserList";
import { durationSearchValue } from "../constants/constants";
import { useAppContext } from "../context/AppContext";
import { useDebounce } from "../hooks/useDebounce";

export const HomePage: React.FC = () => {
  const {
    handleFilterChange,
    filters: { searchUsersValue },
  } = useAppContext();

  const debounce = useDebounce((searchValue) => {
    handleFilterChange("searchUsersValue", searchValue ?? "");
  }, durationSearchValue);

  return (
    <>
      <h1>GitHub Searcher</h1>

      <Filters
        defaultValue={searchUsersValue}
        placeholder="Search for users"
        handleChange={debounce()}
      />
      <FetchUsers
        isInfinityPagination
        render={(users) => <UserList users={users} />}
      />
    </>
  );
};
