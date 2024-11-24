import { useState, useEffect } from 'react';
import { validateTask } from '../utils/validators';

export const useTodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialTasks = [
      { id: 1, text: "Première tâche", completed: false },
      { id: 2, text: "Deuxième tâche", completed: true }
    ];
    setTasks(initialTasks);
  }, []);

  const handleComplete = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleAddTask = () => {
    const validationError = validateTask(newTask);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError(null);
    const newTaskObj = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false
    };
    
    setTasks(prevTasks => [...prevTasks, newTaskObj]);
    setNewTask('');
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    setError(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return {
    tasks,
    newTask,
    error,
    handleAddTask,
    handleComplete,
    handleInputChange,
    handleKeyPress
  };
};