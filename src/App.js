import { useState } from "react";
import uuid from 'react-uuid';

import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Help from './components/Help/Help';
import NotFound from './components/NotFound/NotFound';
import HelpAdd from './components/Help/HelpAdd/HelpAdd';
import HelpChange from './components/Help/HelpChange/HelpChange';
import HelpRemove from './components/Help/HelpRemove/HelpRemove';
import HelpHome from './components/Help/HelpHome/HelpHome';
import { Routes, Route } from 'react-router-dom';

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
    const newTask = { id: uuid(), description: desc, done: status === "completed" };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <Tasks 
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onTaskRemove={handleTaskRemove}
          onClearTasks={handleClearTasks}
          />
        } />
        <Route path="/add" element={<Form onAddTask={handleAddTask}/>} />

        <Route path="/help" element={<Help />}>
          <Route path="" element={<HelpHome />} />
          <Route path="add" element={<HelpAdd />} />
          <Route path="remove" element={<HelpRemove />} />
          <Route path="change" element={<HelpChange />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
