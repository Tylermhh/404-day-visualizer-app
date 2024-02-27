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