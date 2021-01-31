import { ISubRoute, withSubRouter } from 'utils/router';
import { TaskDetails } from 'features/task';

export interface TaskDetailsPageProps extends ISubRoute {}

const TaskDetailsPage = () => <div>Task details page placeholder</div>;

export default withSubRouter(TaskDetailsPage);
