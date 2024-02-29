export interface Task {
    item_name: string;
    category: string;
    completed: boolean;
}

export interface CategoryProgress {
    category_name: string;
    hours: number;
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
