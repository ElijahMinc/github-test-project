export const getMaskSearchUsersQuery = (searchValue: string) =>
  `${searchValue} in:name`;

export const getMaskSearchRepositoryQuery = (
  searchValue: string,
  login: string
) => `${searchValue} in:name user:${login}`;
