import * as Types from '../../../utils/graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetUserProjectsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetUserProjectsQuery = { __typename?: 'Query' } & {
  getUser: { __typename?: 'User' } & Pick<Types.User, '_id'> & {
      projects?: Types.Maybe<
        Array<{ __typename?: 'Project' } & Pick<Types.Project, '_id' | 'title'>>
      >;
    };
};

export const GetUserProjectsDocument = gql`
  query GetUserProjects($id: String!) {
    getUser(id: $id) {
      _id
      projects {
        _id
        title
      }
    }
  }
`;

/**
 * __useGetUserProjectsQuery__
 *
 * To run a query within a React component, call `useGetUserProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProjectsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >
) {
  return Apollo.useQuery<GetUserProjectsQuery, GetUserProjectsQueryVariables>(
    GetUserProjectsDocument,
    baseOptions
  );
}
export function useGetUserProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, baseOptions);
}
export type GetUserProjectsQueryHookResult = ReturnType<
  typeof useGetUserProjectsQuery
>;
export type GetUserProjectsLazyQueryHookResult = ReturnType<
  typeof useGetUserProjectsLazyQuery
>;
export type GetUserProjectsQueryResult = Apollo.QueryResult<
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables
>;
