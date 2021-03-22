import * as Types from '../../../utils/graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type CreateTaskMutationVariables = Types.Exact<{
  type: Types.GeckTaskTypes;
  title: Types.Scalars['String'];
  description?: Types.Maybe<Types.Scalars['String']>;
  projectId: Types.Scalars['ID'];
}>;

export type CreateTaskMutation = { __typename?: 'Mutation' } & {
  createTask: { __typename?: 'GeckTask' } & Pick<
    Types.GeckTask,
    | '_id'
    | 'creator'
    | 'type'
    | 'parentId'
    | 'projectId'
    | 'createdAt'
    | 'updatedAt'
  > & {
      data: { __typename?: 'GeckTaskDataObject' } & Pick<
        Types.GeckTaskDataObject,
        'tags' | 'title' | 'description'
      >;
      children: Array<
        { __typename?: 'GeckTask' } & Pick<
          Types.GeckTask,
          '_id' | 'type' | 'projectId'
        > & {
            data: { __typename?: 'GeckTaskDataObject' } & Pick<
              Types.GeckTaskDataObject,
              'title'
            >;
          }
      >;
    };
};

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
  CreateTaskMutation,
  CreateTaskMutationVariables
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
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    baseOptions
  );
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult = Apollo.MutationResult<
  CreateTaskMutation
>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
