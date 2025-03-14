import { useState } from "react";
import uuid from 'react-uuid';
import './App.scss';

import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Help from './components/Form/Form';
import NotFound from './components/Form/Form';
import HelpAdd from './components/HelpAdd/HelpAdd';
import HelpChange from './components/HelpChange/HelpChange';
import HelpRemove from './components/HelpRemove/HelpRemove';
import { Router, Routes, Route, Link } from 'react-router-dom';

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
    <Router>
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
          <Route path="" element={<Help />} />
          <Route path="add" element={<HelpAdd />} />
          <Route path="remove" element={<HelpRemove />} />
          <Route path="change" element={<HelpChange />} />
          <div className="help-links">
            <Link to="">Introduction</Link>
            <Link to="add">Adding Tasks</Link>
            <Link to="remove">Removing Tasks</Link>
            <Link to="change">Changing Status</Link>
          </div>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
