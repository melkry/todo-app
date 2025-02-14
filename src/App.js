import { useState } from "react";
import uuid from 'react-uuid';

import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  const [tasks, setTasks] = useState([
    { id: uuid(), description: "Get Dressed", done: false },
    { id: uuid(), description: "Feed pets", done: false },
    { id: uuid(), description: "Walk Dog", done: false },
  ]);

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
    if (task.id === id) {
        task.done = !task.done;
    }
    });
    setTasks(updatedTasks);
  }

  const handleTaskRemove = (id) => {
      const filteredTasks = tasks.filter(
          (task) => task.id !== id
      );
      setTasks(filteredTasks);
  }

  const handleClearTasks = () => {
      setTasks([]);
  };

  const handleAddTask = (desc, status) => {
    const newTask = {id: uuid(), description: desc, done: status};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <Header />
      <Tasks 
      tasks={tasks}
      onStatusChange={handleStatusChange}
      onTaskRemove={handleTaskRemove}
      onClearTasks={handleClearTasks}
      />
      <Form onAddTask={handleAddTask}/>
    </div>
  );
}

export default App;
