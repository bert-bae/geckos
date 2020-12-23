export type RecordData = {
  title: string
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export enum RecordTypes {
  Epic,
  Task
}