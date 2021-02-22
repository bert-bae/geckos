import { ISubRoute, withSubRouter } from 'utils/router';

export interface TaskDetailsPageProps extends ISubRoute {}

const TaskDetailsPage = () => <div>Task details page placeholder</div>;

export default withSubRouter(TaskDetailsPage);
