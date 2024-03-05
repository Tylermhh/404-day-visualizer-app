export interface Task {
    _id: string;
    name: string;
    userID: string;
    description?: string;
    category: string;
    priority?: string;
    datesUpdated: DateEntry[];
    done: boolean;
    deadline?: Date;
}

export interface DateEntry {
    date: Date;
    hours: number;
};

export interface CategoryProgress {
    name?: string;
    hours: number;
    color?: string;
}

export interface Category {
    name: string;
    color: string;
}

export interface TaskDetails {
    item_name: string;
    description: string;
    priority: string;
    category: string;
    completed: boolean;
    deadline: Date;
}

export interface CompletedTasks {
    item_name: string;
    description: string;
    start_date: Date;
    complete_date: Date;
    category: string;
    time_spent: string;
}

export type ITask = {
  _id: string;
  name: string;
  userID: string;
  description?: string;
  category: string;
  priority?: string;
  createdAt: Date;
  datesUpdated: IDateEntry[];
  done: boolean;
  deadline?: Date;
};

export type IDateEntry = {
  date: Date;
  hours: number;
};
