import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "../../components/Common/Button/Button"
import { SearchField } from "../../components/Common/Filters"
import { UserBio } from "../../components/Common/UserBio/UserBio"
import { FetchRepositories } from "../../components/Repository/FetchRepositories"
import { RepositoryList } from "../../components/Repository/List/RepositoryList"
import { FetchUsers } from "../../components/Users/FetchUsers"
import { durationSearchValue } from "../../constants/constants"
import { useAppContext } from "../../context/AppContext"
import { useDebounce } from "../../hooks/useDebounce"

export const PersonPage: React.FC = () => {
  const { id, login } = useParams<{ id: string; login: string }>()
  const { goBack } = useHistory()
  const {
    handleFilterChange,
    filters: { searchReposValue },
  } = useAppContext()
  const handleClickPrevPage = () => goBack()

  const debounce = useDebounce((searchValue) => {
    handleFilterChange("searchReposValue", searchValue ?? "")
  }, durationSearchValue)

  return (
    <div>
      <h1>GitHub Searcher</h1>

      <Button onClick={handleClickPrevPage}>{"< back"}</Button>
      <FetchUsers
        isInfinityPagination={false}
        userId={+id}
        render={(users) => <UserBio {...users[0]} />}
      />
      <SearchField
        placeholder="Search for User`s repositories"
        defaultValue={searchReposValue}
        handleChange={debounce()}
      />
      <FetchRepositories
        isInfinityPagination={false}
        login={login}
        render={(repositories) => (
          <RepositoryList repositories={repositories} />
        )}
      />
    </div>
  )
}
