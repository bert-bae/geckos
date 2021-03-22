export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ProjectAccessControlObject = {
  __typename?: 'ProjectAccessControlObject';
  adminAccess: Array<Scalars['String']>;
  readAccess: Array<Scalars['String']>;
  writeAccess: Array<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  creator: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  accessControl: ProjectAccessControlObject;
};

export type ModifiedProjectProperties = {
  __typename?: 'ModifiedProjectProperties';
  _id: Scalars['ID'];
  modifiedProperties: Array<Scalars['String']>;
  deletedTasks: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  projects?: Maybe<Array<Project>>;
};

export type GeckTaskDataObject = {
  __typename?: 'GeckTaskDataObject';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type GeckTask = {
  __typename?: 'GeckTask';
  _id: Scalars['ID'];
  projectId: Scalars['ID'];
  creator: Scalars['ID'];
  type: GeckTaskTypes;
  data: GeckTaskDataObject;
  parentId?: Maybe<Scalars['ID']>;
  children: Array<GeckTask>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  deletedAt: Scalars['String'];
};

export enum GeckTaskTypes {
  Epic = 'Epic',
  Task = 'Task',
  Bug = 'Bug',
  Root = 'Root'
}

export type ModifiedTaskProperties = {
  __typename?: 'ModifiedTaskProperties';
  rootTask: Scalars['ID'];
  modifiedProperties: Array<Scalars['String']>;
  modifiedTasks: Array<Scalars['String']>;
  deletedTasks: Array<Scalars['String']>;
};

export type ProjectAccessControlInput = {
  adminAccess: Array<Scalars['String']>;
  readAccess: Array<Scalars['String']>;
  writeAccess: Array<Scalars['String']>;
};

export type GeckTaskDataInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  getProject: Project;
  getUsersProjects: Array<Project>;
  getUser: User;
  getTask: GeckTask;
};

export type QueryGetProjectArgs = {
  id: Scalars['String'];
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type QueryGetTaskArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  updateTask: ModifiedTaskProperties;
  createUser: User;
  createTask: GeckTask;
  softDeleteTask: ModifiedTaskProperties;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationUpdateTaskArgs = {
  updateInput: UpdateTaskInput;
  id: Scalars['String'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationSoftDeleteTaskArgs = {
  id: Scalars['String'];
};

export type CreateProjectInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  type?: Maybe<GeckTaskTypes>;
  parentId?: Maybe<Scalars['String']>;
  data?: Maybe<GeckTaskDataInput>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateTaskInput = {
  type: GeckTaskTypes;
  projectId: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  data: GeckTaskDataInput;
};
