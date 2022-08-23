import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useScroll } from "../../hooks/useScroll";
import { useSkipFirstMount } from "../../hooks/useSkipFirstMount";
import repositoryService from "../../service/RepositoryService";
import { Repository } from "../../types/repository.interface";
import { User } from "../../types/user.interface";
import { Loader } from "../Common/Loader/Loader";
import { errorToast, successToast } from "../Common/Toast/actions";

interface FetchRepoProps {
  login: User["login"];
  isInfinityPagination: boolean;

  render: (users: Repository[]) => JSX.Element;
}

export const FetchRepositories: React.FC<FetchRepoProps> = ({
  isInfinityPagination,
  login,
  render,
}) => {
  const [repositories, setRepository] = useState<Repository[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState(false);
  const childRef = useRef<HTMLDivElement | null>(null);

  const { filters, handleFilterChange } = useAppContext();

  const fetchRepositories = useCallback(async () => {
    setFetching(true);
    try {
      const repositories = await repositoryService.getAllRepositories(
        filters.searchRepoValue,
        login
      );

      setRepository(repositories);
      successToast("Repositories are loaded");
    } catch (error) {
      setError(true);
      errorToast("Oops... Something went wrong :C");
    } finally {
      setFetching(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.searchRepoValue]);

  useScroll(
    {
      childRef,
    },
    (_: IntersectionObserver) => {
      const isNotObservering = !isInfinityPagination || isFetching || isError;

      if (isNotObservering) return;
      fetchRepositories();

      handleFilterChange("perPage", +filters.perPage + 10);

      window.scrollBy(0, -100);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );

  useEffect(() => {
    if (!isInfinityPagination) {
      fetchRepositories();
    }

    return () => {
      repositoryService.abortRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSkipFirstMount(() => {
    fetchRepositories();
  }, [filters.searchRepoValue.length]);
  const isEmptyRepositories = !isFetching && !repositories.length;

  return (
    <>
      {isFetching && <Loader />}
      {render(repositories as Repository[])}
      {isEmptyRepositories && <h2>No repositories</h2>}
      <div ref={isInfinityPagination ? childRef : null}></div>
    </>
  );
};
