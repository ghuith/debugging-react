import React from 'react';
import { Button } from '../ui/button';

export const TodoItem = ({ task, onComplete }) => {
  if (!task) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 p-2 border rounded">
      <span className={task.completed ? 'line-through' : ''}>
        {task.text}
      </span>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onComplete(task.id)}
      >
        {task.completed ? 'Annuler' : 'Terminer'}
      </Button>
    </div>
  );
};