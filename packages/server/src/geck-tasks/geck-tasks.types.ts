export type GeckTaskData = {
  title: string
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export enum GeckTaskTypes {
  Epic,
  Task
}