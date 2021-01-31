import React from 'react';
import { ISubRoute, withSubRouter } from 'utils/router';
import PageWithHeader from 'features/common/layout/page-with-header';
import { TaskAccordion } from 'features/task';
import { GeckTaskTypes } from 'utils/graphql/types.generated';
import { useGetTaskQuery } from 'features/task/queries/get-task.generated';

interface TaskListPageProps extends ISubRoute {
  id: string;
}

const TaskListPage: React.FC<TaskListPageProps> = (props) => {
  const { id } = props;

  const { data, loading } = useGetTaskQuery({
    variables: {
      id: '6470f08a-89cf-4732-ab91-6dc43e8f57c4'
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  return (
    <PageWithHeader>
      <TaskAccordion type={data.getTask.type} title={data.getTask.data.title}>
        <div>Something</div>
      </TaskAccordion>
    </PageWithHeader>
  );
};

export default withSubRouter(TaskListPage);
