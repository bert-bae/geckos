import * as Types from '../../../utils/graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetProjectQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetProjectQuery = { __typename?: 'Query' } & {
  getProject: { __typename?: 'Project' } & Pick<
    Types.Project,
    '_id' | 'title' | 'description'
  >;
};

export const GetProjectDocument = gql`
  query GetProject($id: String!) {
    getProject(id: $id) {
      _id
      title
      description
    }
  }
`;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectQuery,
    GetProjectQueryVariables
  >
) {
  return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(
    GetProjectDocument,
    baseOptions
  );
}
export function useGetProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectQuery,
    GetProjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(
    GetProjectDocument,
    baseOptions
  );
}
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<
  typeof useGetProjectLazyQuery
>;
export type GetProjectQueryResult = Apollo.QueryResult<
  GetProjectQuery,
  GetProjectQueryVariables
>;
