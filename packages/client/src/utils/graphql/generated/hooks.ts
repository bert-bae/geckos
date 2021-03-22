import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export const CreateProjectDocument = gql`
  mutation CreateProject($title: String!, $description: String) {
    createProject(input: { title: $title, description: $description }) {
      _id
      title
      description
    }
  }
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  Types.CreateProjectMutation,
  Types.CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateProjectMutation,
    Types.CreateProjectMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.CreateProjectMutation,
    Types.CreateProjectMutationVariables
  >(CreateProjectDocument, baseOptions);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult = Apollo.MutationResult<
  Types.CreateProjectMutation
>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateProjectMutation,
  Types.CreateProjectMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation CreateTask(
    $type: GeckTaskTypes!
    $title: String!
    $projectId: ID!
    $description: String
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
      children {
        _id
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
 *      projectId: // value for 'projectId'
 *      description: // value for 'description'
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
    Types.GetProjectQuery,
    Types.GetProjectQueryVariables
  >
) {
  return Apollo.useQuery<Types.GetProjectQuery, Types.GetProjectQueryVariables>(
    GetProjectDocument,
    baseOptions
  );
}
export function useGetProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetProjectQuery,
    Types.GetProjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetProjectQuery,
    Types.GetProjectQueryVariables
  >(GetProjectDocument, baseOptions);
}
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<
  typeof useGetProjectLazyQuery
>;
export type GetProjectQueryResult = Apollo.QueryResult<
  Types.GetProjectQuery,
  Types.GetProjectQueryVariables
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
    Types.GetUserProjectsQuery,
    Types.GetUserProjectsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetUserProjectsQuery,
    Types.GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, baseOptions);
}
export function useGetUserProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetUserProjectsQuery,
    Types.GetUserProjectsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetUserProjectsQuery,
    Types.GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, baseOptions);
}
export type GetUserProjectsQueryHookResult = ReturnType<
  typeof useGetUserProjectsQuery
>;
export type GetUserProjectsLazyQueryHookResult = ReturnType<
  typeof useGetUserProjectsLazyQuery
>;
export type GetUserProjectsQueryResult = Apollo.QueryResult<
  Types.GetUserProjectsQuery,
  Types.GetUserProjectsQueryVariables
>;
