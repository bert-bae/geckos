
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum GeckTaskTypes {
    Epic = "Epic",
    Task = "Task"
}

export interface UserInput {
    email: string;
    password: string;
}

export interface CreateUserDto {
    id: string;
    email: string;
}

export interface GeckTaskData {
    title: string;
    description?: string;
    tags?: string[];
}

export interface GeckTask {
    id: string;
    creator: string;
    type: GeckTaskTypes;
    data: GeckTaskData;
    parentId?: string;
    children?: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IQuery {
    hello(): string | Promise<string>;
    getUser(id: string): CreateUserDto | Promise<CreateUserDto>;
    GetTask(id: string): GeckTask | Promise<GeckTask>;
}

export interface IMutation {
    createUser(input: UserInput): CreateUserDto | Promise<CreateUserDto>;
    CreateTask(): GeckTask | Promise<GeckTask>;
}
