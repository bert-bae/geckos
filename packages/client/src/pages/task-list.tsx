import { Link } from 'react-router-dom';
import { ISubRoute, withSubRouter } from 'utils/router';
import { getLink } from 'utils/link';

interface TaskListPageProps extends ISubRoute {}

const TaskListPage = (props: TaskListPageProps) => (
  <>
    <Link to={getLink.login()}>a</Link>
    <div>Task List Page Placeholder</div>
  </>
);

export default withSubRouter(TaskListPage);
