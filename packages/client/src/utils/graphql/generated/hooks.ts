import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export const CreateTaskDocument = gql`
  mutation CreateTask(
    $type: GeckTaskTypes!
    $title: String!
    $description: String
    $projectId: ID!
  ) {
    createTask(
      input: {
        type: $type
        projectId: $projectId
        data: { title: $title, description: $description, tags: [] }
      }
    ) {
      _id
      creator
      type
      data {
        tags
        title
        description
      }
      parentId
      projectId
      children {
        _id
        type
        projectId
        data {
          title
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  Types.CreateTaskMutation,
  Types.CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      type: // value for 'type'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateTaskMutation,
    Types.CreateTaskMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.CreateTaskMutation,
    Types.CreateTaskMutationVariables
  >(CreateTaskDocument, baseOptions);
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult = Apollo.MutationResult<
  Types.CreateTaskMutation
>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateTaskMutation,
  Types.CreateTaskMutationVariables
>;
export const GetTaskDocument = gql`
  query GetTask($id: String!) {
    getTask(id: $id) {
      _id
      data {
        tags
        title
        description
      }
      type
      children {
        _id
        type
        projectId
        data {
          title
        }
      }
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
  baseOptions: Apollo.QueryHookOptions<
    Types.GetTaskQuery,
    Types.GetTaskQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetTaskQuery, Types.GetTaskQueryVariables>(
    GetTaskDocument,
    baseOptions
  );
}
export function useGetTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetTaskQuery,
    Types.GetTaskQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.GetTaskQuery, Types.GetTaskQueryVariables>(
    GetTaskDocument,
    baseOptions
  );
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<
  Types.GetTaskQuery,
  Types.GetTaskQueryVariables
>;
