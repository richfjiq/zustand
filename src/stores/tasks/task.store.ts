import { create, StateCreator } from 'zustand';
import { Task, TaskStatus } from '../../interfaces';

interface TaskState {
  tasks: Record<string, Task>;
  getTaskByStatus: (status: TaskStatus) => Task[];
  // addTask: (task: Task) => void;
  // updateTask: (id: string, updatedTask: Partial<Task>) => void;
  // deleteTask: (id: string) => void;
}

const storeApi: StateCreator<TaskState> = (set, get) => ({
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'done' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },
  getTaskByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;
    return Object.values(tasks).filter((task) => task.status === status);
  },
});

export const useTaskStore = create<TaskState>()(storeApi);
