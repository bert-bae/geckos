export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  id: Scalars['ID'];
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
  creator: Scalars['ID'];
  type: GeckTaskTypes;
  data: GeckTaskDataObject;
  parentId?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<Scalars['String']>>;
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

export type GeckTaskDataInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getUser: CreateUserDto;
  getTask: GeckTask;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetTaskArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserDto;
  createTask: GeckTask;
  updateTask: ModifiedTaskProperties;
  softDeleteTask: ModifiedTaskProperties;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationUpdateTaskArgs = {
  updateInput: UpdateTaskInput;
  id: Scalars['String'];
};


export type MutationSoftDeleteTaskArgs = {
  id: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateTaskInput = {
  type: GeckTaskTypes;
  parentId?: Maybe<Scalars['ID']>;
  data: GeckTaskDataInput;
};

export type UpdateTaskInput = {
  type?: Maybe<GeckTaskTypes>;
  parentId?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Scalars['String']>>;
  data?: Maybe<GeckTaskDataInput>;
};
