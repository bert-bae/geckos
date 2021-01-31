import { Link } from 'react-router-dom';
import { ISubRoute, withSubRouter } from 'utils/router';
import PageWithHeader from 'features/common/layout/page-with-header';
import { getLink } from 'utils/link';

interface TaskListPageProps extends ISubRoute {}

const TaskListPage = (props: TaskListPageProps) => (
  <PageWithHeader>
    <Link to={getLink.login()}>a</Link>
    <div>Task List Page Placeholder</div>
  </PageWithHeader>
);

export default withSubRouter(TaskListPage);
