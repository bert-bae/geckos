
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

export interface GeckTaskDataInput {
    title: string;
    description?: string;
    tags?: string[];
}

export interface UserInput {
    email: string;
    password: string;
}

export interface CreateTaskInput {
    type: GeckTaskTypes;
    parentId?: string;
    data: GeckTaskDataInput;
}

export interface UpdateTaskInput {
    type?: GeckTaskTypes;
    parentId?: string;
    children?: string[];
    data?: GeckTaskDataInput;
}

export interface CreateUserDto {
    _id: string;
    email: string;
}

export interface GeckTaskDataObject {
    title: string;
    description?: string;
    tags?: string[];
}

export interface GeckTask {
    _id: string;
    creator: string;
    type: GeckTaskTypes;
    data: GeckTaskDataObject;
    parentId?: string;
    children?: string[];
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
    hello(): string | Promise<string>;
    getUser(id: string): CreateUserDto | Promise<CreateUserDto>;
    getTask(id: string): GeckTask | Promise<GeckTask>;
}

export interface IMutation {
    createUser(input: UserInput): CreateUserDto | Promise<CreateUserDto>;
    createTask(input: CreateTaskInput): GeckTask | Promise<GeckTask>;
    updateTask(updateInput: UpdateTaskInput, id: string): ModifiedTaskProperties | Promise<ModifiedTaskProperties>;
    softDeleteTask(id: string): ModifiedTaskProperties | Promise<ModifiedTaskProperties>;
}
