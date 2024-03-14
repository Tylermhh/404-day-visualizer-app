import { ITask, Category } from "./types/types";

export let tempTasks: ITask[] = [
    {
      _id: "tempID100",
      name: "Make backend",
      userID: "Johnny123",
      description: "Add pie chart",
      createdAt: new Date("2024-01-16"),
      datesUpdated: [
        {
          date: new Date("2024-01-16"),
          hours: 0,
        },
        {
          date: new Date("2024-01-18"),
          hours: 7,
        },
        {
          date: new Date("2024-01-20"),
          hours: 3,
        },
      ],
      category: "Academics",
      done: true,
    },
    {
      _id: "tempID200",
      name: "Make backend",
      userID: "Maxwell Smooth",
      description: "Add backend",
      createdAt: new Date("2024-01-14"),
      datesUpdated: [
        {
          date: new Date("2024-01-14"),
          hours: 0,
        },
        {
          date: new Date("2024-01-18"),
          hours: 1,
        },
      ],
      category: "Academics",
      done: false,
    },
    {
      _id: "tempID300",
      name: "Sell clothes",
      userID: "Johnny123",
      description: "Sell clothes at Dexter Lawn",
      createdAt: new Date("2024-01-24"),
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 0,
        },
      ],
      category: "Business",
      done: false,
    },
    {
      _id: "tempID400",
      name: "Complete Frontend Tasks",
      userID: "test_user",
      description: "N/A",
      createdAt: new Date("2024-01-24"),
      category: "Frontend",
      priority: "High",
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 1,
        },
      ],
      done: true
    },
    {
      _id: "tempID400",
      name: "Complete Frontend Tasks",
      userID: "test_user",
      description: "N/A",
      createdAt: new Date("2024-01-24"),
      category: "Frontend",
      priority: "High",
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 1,
        },
      ],
      done: true
    },
    {
      _id: "tempID400",
      name: "Complete Frontend Tasks",
      userID: "test_user",
      description: "N/A",
      createdAt: new Date("2024-01-24"),
      category: "Frontend",
      priority: "High",
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 3,
        },
      ],
      done: true
    },
    {
      _id: "tempID400",
      name: "Complete Frontend Tasks",
      userID: "test_user",
      description: "N/A",
      createdAt: new Date("2024-01-24"),
      category: "Frontend",
      priority: "High",
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 6,
        },
      ],
      done: true
    },
    {
      _id: "1",
      name: "Complete Backend Tasks",
      userID: "test_user",
      description: "N/A",
      createdAt: new Date("2024-01-24"),
      category: "Backend",
      priority: "High",
      datesUpdated: [
        {
          date: new Date("2024-01-24"),
          hours: 6,
        },
      ],
      done: true
    },
        {
          _id: "2",
          name: "Get Other Things Done",
          userID: "test_user",
          description: "N/A",
          createdAt: new Date("2024-01-24"),
          category: "Other",
          priority: "Low",
          datesUpdated: [
            {
              date: new Date("2024-01-24"),
              hours: 1,
            },
          ],
          done: true
        },
        {
          _id: "3",
          name: "OAZO 7",
          userID: "test_user",
          description: "N/A",
          createdAt: new Date("2024-01-24"),
          category: "CSC 430",
          priority: "Low",
          datesUpdated: [
            {
              date: new Date("2024-01-24"),
              hours: 10,
            },
          ],
          done: false
        },
        {
          _id: "4",
          name: "Assignment 9",
          userID: "test_user",
          description: "N/A",
          createdAt: new Date("2024-01-24"),
          category: "Physics",
          priority: "Low",
          datesUpdated: [
            {
              date: new Date("2024-01-24"),
              hours: 2,
            },
          ],
          done: false
        },
        {
          _id: "5",
          name: "Assignment 10",
          userID: "test_user",
          description: "N/A",
          createdAt: new Date("2024-01-24"),
          category: "Physics",
          priority: "Low",
          datesUpdated: [
            {
              date: new Date("2024-01-24"),
              hours: 3,
            },
          ],
          done: false
        }
];
  
export let userCategories: Category[] = [
    { name: "Frontend", color: "#0088FE" },
    { name: "Backend", color: "#F098FE" },
    { name: "Other", color: "#FFBB28" },
    { name: "CSC 430", color: "#2BA428" },
    { name: "Physics", color: "#123456" },
    { name: "Business", color: "#234324" },
    { name: "Academic", color: "#f32141" },
];
