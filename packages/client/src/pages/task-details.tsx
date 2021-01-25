import { ISubRoute, withSubRouter } from 'utils/router';
import { TaskDetails } from 'features/task';

export interface TaskDetailsPageProps extends ISubRoute {}

const TaskDetailsPage = () => <TaskDetails />;

export default withSubRouter(TaskDetailsPage);
