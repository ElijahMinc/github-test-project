import { useCallback, useEffect, useRef, useState } from "react"
import { useAppContext } from "../../context/AppContext"
import { useScroll } from "../../hooks/useScroll"
import { useSkipFirstMount } from "../../hooks/useSkipFirstMount"
import userService from "../../service/UserService"
import { User } from "./types/user.interface"
import { Loader } from "../Common/Loader/Loader"
import { errorToast, successToast } from "../Common/Toast/actions"

interface LaunchUserProps {
  render: (users: User[]) => JSX.Element
  isInfinityPagination: boolean
  userId?: number
}

export const FetchUsers: React.FC<LaunchUserProps> = ({
  render,
  isInfinityPagination,
  userId,
}) => {
  const [users, setUsers] = useState<User[]>([])
  const [isFetching, setFetching] = useState(false)
  const { filters, handleFilterChange } = useAppContext()
  const [isError, setError] = useState(false)
  const childRef = useRef<HTMLDivElement | null>(null)

  const fetchUsers = useCallback(
    async (perPage: number) => {
      setFetching(true)
      try {
        const users = userId
          ? await userService.getUserById(userId)
          : await userService.getAllUsers(
              filters.searchUsersValue,
              Number(perPage)
            )

        setUsers(users)
        successToast("Users are loaded")
      } catch (error) {
        setError(true)
        errorToast("Oops... Something went wrong :C")
      } finally {
        setFetching(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filters.searchUsersValue, filters.perPage]
  )

  useScroll(
    {
      childRef,
    },
    (_: IntersectionObserver) => {
      const isNotObservering = !isInfinityPagination || isFetching || isError

      if (isNotObservering) return
      fetchUsers(+filters.perPage)

      handleFilterChange("perPage", +filters.perPage + 10)

      window.scrollBy(0, -100)
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  )

  useEffect(() => {
    if (!isInfinityPagination) {
      fetchUsers(+filters.perPage)
    }

    return () => {
      userService.abortRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useSkipFirstMount(() => {
    fetchUsers(+filters.perPage)
  }, [filters.searchUsersValue.length])

  const isEmptyUsers = !isFetching && !users.length

  return (
    <div>
      {isFetching && <Loader />}
      {render(users as User[])}
      {isEmptyUsers && <h2>No users</h2>}
      <div ref={isInfinityPagination ? childRef : null}></div>
    </div>
  )
}
