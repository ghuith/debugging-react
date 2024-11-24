export const validateTask = (task) => {
    if (!task) {
      return 'La tâche ne peut pas être vide';
    }
    if (task.trim().length < 3) {
      return 'La tâche doit contenir au moins 3 caractères';
    }
    return null;
  };