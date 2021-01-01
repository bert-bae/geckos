import React from "react";
import {
  AccordionTask,
  AccordionTaskSummary,
  AccordionTaskDetail,
} from "./shared-components/accordion";

function App() {
  return (
    <div>
      <AccordionTask
        TaskSummaryProps={{
          title: "hello",
          link: "https://www.google.ca",
        }}
      />
    </div>
  );
}

export default App;
