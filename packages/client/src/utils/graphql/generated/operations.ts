import * as Types from './types';

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

export type GetTaskQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetTaskQuery = { __typename?: 'Query' } & {
  getTask: { __typename?: 'GeckTask' } & Pick<
    Types.GeckTask,
    '_id' | 'type' | 'creator' | 'createdAt'
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
