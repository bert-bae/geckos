import React from "react";
import { AccordionTask } from "./components/accordion-task";

function App() {
  return (
    <div>
      <AccordionTask
        TaskSummaryProps={{
          title: "hello",
          taskType: "Task",
          link: "https://www.google.ca",
        }}
      />
    </div>
  );
}

export default App;
