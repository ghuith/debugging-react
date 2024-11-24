import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { TodoItem } from './TodoItem';
import { useTodoList } from '../../hooks/useTodoList';

export const TodoList = () => {
  const {
    tasks,
    newTask,
    error,
    handleAddTask,
    handleComplete,
    handleInputChange,
    handleKeyPress
  } = useTodoList();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Liste de Tâches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newTask}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Nouvelle tâche"
              className={error ? 'border-red-500' : ''}
            />
            <Button onClick={handleAddTask}>Ajouter</Button>
          </div>
          
          {error && (
            <div className="text-red-500">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            {tasks.map(task => (
              <TodoItem
                key={task.id}
                task={task}
                onComplete={handleComplete}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};