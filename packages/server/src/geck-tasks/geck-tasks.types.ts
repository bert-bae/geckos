export type GeckTaskData = {
  title?: string;
  description?: string;
  tags?: string[];
};

export enum GeckTaskTypes {
  Epic,
  Task,
  Bug,
  Root
}
