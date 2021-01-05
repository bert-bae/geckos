import AccordionTask from './components/accordion-task';

function App() {
  return (
    <div>
      <AccordionTask
        TaskSummaryProps={{
          title: 'hello',
          type: 'Task',
          link: 'https://www.google.ca'
        }}
        TaskDetailProps={{
          type: 'Task',
          description: 'hello world first description'
        }}
      />
    </div>
  );
}

export default App;
