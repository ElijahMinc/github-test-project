import { getMaskSearchRepositoryQuery } from "../helpers/getMaskSearchQuery"
import { $BaseApi } from "../http/axios"
import { Repository } from "../components/Repository/types/repository.interface"
import { HttpRequest } from "./HttpService"
import { GitHubResponseBySearch } from "../components/Repository/types/repository-response.interface"

class RepositoryService extends HttpRequest {
  async getAllRepositories(
    searchValue: string,
    login: string
  ): Promise<Repository[]> {
    try {
      const { data } = await $BaseApi.get<GitHubResponseBySearch<Repository>>(
        `/search/repositories?q=${getMaskSearchRepositoryQuery(
          searchValue,
          login
        )}&per_page=20`
      )
      const repositories = data.items.map((item) => item)

      return repositories
    } catch (error) {
      throw new Error("Error get repositories")
    }
  }
}

export default new RepositoryService()
