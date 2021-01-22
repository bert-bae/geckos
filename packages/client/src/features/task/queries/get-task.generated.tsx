import * as Types from '../../../utils/graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetTaskQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetTaskQuery = { __typename?: 'Query' } & {
  getTask: { __typename?: 'GeckTask' } & Pick<
    Types.GeckTask,
    '_id' | 'children' | 'creator' | 'createdAt'
  > & {
      data: { __typename?: 'GeckTaskDataObject' } & Pick<
        Types.GeckTaskDataObject,
        'tags' | 'title' | 'description'
      >;
    };
};

export const GetTaskDocument = gql`
  query GetTask($id: String!) {
    getTask(id: $id) {
      _id
      data {
        tags
        title
        description
      }
      children
      creator
      createdAt
    }
  }
`;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>
) {
  return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(
    GetTaskDocument,
    baseOptions
  );
}
export function useGetTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>
) {
  return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(
    GetTaskDocument,
    baseOptions
  );
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<
  GetTaskQuery,
  GetTaskQueryVariables
>;
