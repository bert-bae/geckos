import React from 'react';
import { ISubRoute, withSubRouter } from 'utils/router';
import PageWithHeader from 'features/common/layout/page-with-header';

interface ProjectProps extends ISubRoute {}

function ProjectsPage(props: ProjectProps) {
  return (
    <PageWithHeader>
      <div>Project Page</div>
    </PageWithHeader>
  );
}

export default withSubRouter(ProjectsPage);
