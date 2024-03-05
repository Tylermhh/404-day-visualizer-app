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
};