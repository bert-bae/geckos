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

export type CreateUserDto = {
  __typename?: 'CreateUserDto';
  _id: Scalars['ID'];
  email: Scalars['String'];
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

export type GeckTaskDataInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ProjectAccessControlInput = {
  adminAccess: Array<Scalars['String']>;
  readAccess: Array<Scalars['String']>;
  writeAccess: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getUser: CreateUserDto;
  getTask: GeckTask;
  getProject: Project;
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type QueryGetTaskArgs = {
  id: Scalars['String'];
};

export type QueryGetProjectArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserDto;
  createTask: GeckTask;
  updateTask: ModifiedProjectProperties;
  softDeleteTask: ModifiedTaskProperties;
  createProject: Project;
};

export type MutationCreateUserArgs = {
  input: UserInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationUpdateTaskArgs = {
  updateInput: UpdateProjectInput;
  id: Scalars['String'];
};

export type MutationSoftDeleteTaskArgs = {
  id: Scalars['String'];
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateTaskInput = {
  type: GeckTaskTypes;
  projectId: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  data: GeckTaskDataInput;
};

export type UpdateProjectInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['ID']>;
  accessControl: ProjectAccessControlInput;
};

export type CreateProjectInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['ID']>;
};
