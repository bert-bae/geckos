
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum GeckTaskTypes {
    Epic = "Epic",
    Task = "Task",
    Bug = "Bug",
    Root = "Root"
}

export interface ProjectAccessControlInput {
    adminAccess: string[];
    readAccess: string[];
    writeAccess: string[];
}

export interface GeckTaskDataInput {
    title: string;
    description?: string;
    tags?: string[];
}

export interface CreateProjectInput {
    title: string;
    description?: string;
}

export interface UpdateTaskInput {
    type?: GeckTaskTypes;
    parentId?: string;
    data?: GeckTaskDataInput;
}

export interface CreateUserInput {
    email: string;
    password: string;
}

export interface CreateTaskInput {
    type: GeckTaskTypes;
    projectId: string;
    parentId?: string;
    data: GeckTaskDataInput;
}

export interface ProjectAccessControlObject {
    adminAccess: string[];
    readAccess: string[];
    writeAccess: string[];
}

export interface Project {
    _id: string;
    title: string;
    description?: string;
    creator: string;
    createdAt: string;
    updatedAt?: string;
    deletedAt?: string;
    accessControl: ProjectAccessControlObject;
}

export interface ModifiedProjectProperties {
    _id: string;
    modifiedProperties: string[];
    deletedTasks: string[];
}

export interface User {
    _id: string;
    email: string;
    projects?: Project[];
}

export interface GeckTaskDataObject {
    title: string;
    description?: string;
    tags?: string[];
}

export interface GeckTask {
    _id: string;
    projectId: string;
    creator: string;
    type: GeckTaskTypes;
    data: GeckTaskDataObject;
    parentId?: string;
    children: GeckTask[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface ModifiedTaskProperties {
    rootTask: string;
    modifiedProperties: string[];
    modifiedTasks: string[];
    deletedTasks: string[];
}

export interface IQuery {
    getProject(id: string): Project | Promise<Project>;
    getUsersProjects(): Project[] | Promise<Project[]>;
    getUser(id: string): User | Promise<User>;
    getTask(id: string): GeckTask | Promise<GeckTask>;
}

export interface IMutation {
    createProject(input: CreateProjectInput): Project | Promise<Project>;
    updateTask(updateInput: UpdateTaskInput, id: string): ModifiedTaskProperties | Promise<ModifiedTaskProperties>;
    createUser(input: CreateUserInput): User | Promise<User>;
    createTask(input: CreateTaskInput): GeckTask | Promise<GeckTask>;
    softDeleteTask(id: string): ModifiedTaskProperties | Promise<ModifiedTaskProperties>;
}
