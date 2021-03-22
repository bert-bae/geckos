import * as Types from './types';

export type CreateProjectMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  description?: Types.Maybe<Types.Scalars['String']>;
}>;

export type CreateProjectMutation = { __typename?: 'Mutation' } & {
  createProject: { __typename?: 'Project' } & Pick<
    Types.Project,
    '_id' | 'title' | 'description'
  >;
};

export type CreateTaskMutationVariables = Types.Exact<{
  type: Types.GeckTaskTypes;
  title: Types.Scalars['String'];
  projectId: Types.Scalars['ID'];
  description?: Types.Maybe<Types.Scalars['String']>;
}>;

export type CreateTaskMutation = { __typename?: 'Mutation' } & {
  createTask: { __typename?: 'GeckTask' } & Pick<
    Types.GeckTask,
    '_id' | 'creator' | 'type' | 'parentId' | 'createdAt' | 'updatedAt'
  > & {
      data: { __typename?: 'GeckTaskDataObject' } & Pick<
        Types.GeckTaskDataObject,
        'tags' | 'title' | 'description'
      >;
      children: Array<
        { __typename?: 'GeckTask' } & Pick<Types.GeckTask, '_id'>
      >;
    };
};

export type GetProjectQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetProjectQuery = { __typename?: 'Query' } & {
  getProject: { __typename?: 'Project' } & Pick<
    Types.Project,
    '_id' | 'title' | 'description'
  >;
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
        { __typename?: 'GeckTask' } & Pick<Types.GeckTask, '_id'>
      >;
    };
};

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
