# Taskcraft by 404
A todo / task-analyzer app

## Project Vision
For STEM students who aren’t and wish to be aware of how they spend their time, the time app is a time management and visualizer app that serves as a motivating to-do list.

Unlike built-in “to-do lists” our product analyzes how long each item took you to visualize how you spent your time that day and motivates you to be more productive.

## Project Description
Taskcraft is an app design to help individuals gain a better understanding of their time spending habits. Keeping track of time can get hard, especially if you have a lot of
thing going on all at once, like having various projects or homework assignments you need to get done. The purpose of Taskcraft is to help you keep track of your time and help
you visualize how you spend it. By having various ways to keep track of how long you work on certain tasks or how often you work on one subset of tasks compared to another, 
Taskcraft provides various visualization methods, like hours spent per category, to help you gain an understanding on how you spend most of your time. 

## Website Link
[Taskcraft](https://thankful-dune-0d41a831e.5.azurestaticapps.net/)

## UI Prototype
- [Figma UI Prototype](https://www.figma.com/file/ZOc6xjfhkhTE3yyKUHFoGL/404-visualizer-app?type=design&node-id=0%3A1&mode=design&t=Oi5bb2p3YFzPVBrt-1)
- Last Updated: 2/8/2024 

## UML Class Diagrams
- [UML Class Diagrams Wiki Page](https://github.com/Tylermhh/404-day-visualizer-app/wiki/UML-Class-Diagram)
- Late Updated: 2/22/2024

## Development Environment Set Up
To get started on further developing this web app, not much is needed in terms of setting up your environment or your system packages. 
The only prerequesites are that your system is able to run npm/npx commands and supports javascript and typescript. There is an eslint dependency but that should be included in the git files and should get installed when you run npm install for the first time.
In terms of the environment variables, these are defined either on the deployed web servers or if the server is unavailable, defined in the code itself that is published in this repository.

The continuous integration and deployment is already set in the github repository so no further action is needed in that regard.

**Setup instructions**
- git clone this repository
- npm install in root directory
- npm start in root directory to run frontend
- npm run dev in packages/express-backend to run backend
