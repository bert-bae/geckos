import { ISubRoute, withSubRouter } from 'utils/router';

interface TaskListPageProps extends ISubRoute {}

const TaskListPage = (props: TaskListPageProps) => (
  <>
    <div>Task List Page Placeholder</div>
  </>
);

export default withSubRouter(TaskListPage);
