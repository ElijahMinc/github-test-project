import { getMaskSearchUsersQuery } from "../helpers/getMaskSearchQuery"
import { $BaseApi } from "../http/axios"
import { FiltersData } from "../components/Common/Filters/types/filters.interface"
import { User } from "../components/Users/types/user.interface"
import { HttpRequest } from "./HttpService"
import { GitHubResponseBySearch } from "../components/Repository/types/repository-response.interface"

class UserService extends HttpRequest {
  async getAllUsers(
    searchValue: FiltersData["searchUsersValue"],
    perPage: number
  ): Promise<User[]> {
    try {
      const { data } = await $BaseApi.get<GitHubResponseBySearch<User>>(
        `/search/users?q=${getMaskSearchUsersQuery(
          searchValue
        )}&per_page=${perPage}`
      )

      const getUsersById = data.items.map(({ id }) =>
        $BaseApi.get(`/user/${id}`)
      )

      const usersById = await Promise.all(getUsersById)
      const users = usersById.map(({ data }) => data)

      return users
    } catch (error) {
      throw new Error("Error get users")
    }
  }

  async getUserById(id: number): Promise<User[]> {
    try {
      const { data } = await $BaseApi.get(`/user/${id}`)

      return [data]
    } catch (error) {
      throw new Error("Error get users")
    }
  }
}

export default new UserService()
