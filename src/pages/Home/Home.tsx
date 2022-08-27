import React from "react"
import { SearchField } from "../../components/Common/Filters/SearchField"
import { FetchUsers } from "../../components/Users/FetchUsers"
import { UserList } from "../../components/Users/List/UserList"
import { durationSearchValue } from "../../constants/constants"
import { useAppContext } from "../../context/AppContext"
import { useDebounce } from "../../hooks/useDebounce"

export const HomePage: React.FC = () => {
  const {
    handleFilterChange,
    filters: { searchUsersValue },
  } = useAppContext()

  const debounce = useDebounce((searchValue) => {
    handleFilterChange("searchUsersValue", searchValue ?? "")
  }, durationSearchValue)

  return (
    <>
      <h1>GitHub Searcher</h1>

      <SearchField
        defaultValue={searchUsersValue}
        placeholder="Search for users"
        handleChange={debounce()}
      />
      <FetchUsers
        isInfinityPagination
        render={(users) => <UserList users={users} />}
      />
    </>
  )
}
